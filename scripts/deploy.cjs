#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const environment = args[0]; // 'dev' or 'prod'

if (!environment || !['dev', 'prod'].includes(environment)) {
  console.error('❌ Usage: node scripts/deploy.js <dev|prod>');
  process.exit(1);
}

const branchName = environment;
const distPath = path.resolve(__dirname, '../dist');

console.log(`\n🚀 Starting deployment to ${environment} branch...\n`);

try {
  // Step 0: Ensure dependencies are installed
  console.log('📦 Step 0: Checking dependencies...');
  if (!fs.existsSync('node_modules')) {
    console.log('   Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  } else {
    console.log('   Dependencies already installed');
  }

  // Step 1: Clean dist folder and build cache
  console.log('📦 Step 1: Cleaning dist folder and build cache...');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
  }

  // Clean Vite cache to ensure fresh build
  const viteCachePath = path.resolve(__dirname, '../node_modules/.vite');
  if (fs.existsSync(viteCachePath)) {
    fs.rmSync(viteCachePath, { recursive: true, force: true });
    console.log('   Cleared Vite cache');
  }

  // Step 2: Build for production
  console.log(`🔨 Step 2: Building for ${environment}...`);
  execSync('npm run build', { stdio: 'inherit' });

  // Step 3: Check if dist folder exists
  if (!fs.existsSync(distPath)) {
    throw new Error('Build failed: dist folder not found');
  }

  // Step 4: Save current branch
  console.log('💾 Step 3: Saving current branch...');
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();
  console.log(`   Current branch: ${currentBranch}`);

  // Step 5: Stash any uncommitted changes
  console.log('📝 Step 4: Stashing uncommitted changes...');
  try {
    execSync('git stash push -u -m "Deploy stash"', { stdio: 'pipe' });
  } catch (e) {
    console.log('   No changes to stash');
  }

  // Step 5.5: Backup dist folder to temp location outside git
  console.log('💾 Step 5.5: Backing up build files...');
  const os = require('os');
  const tempDistPath = path.join(os.tmpdir(), 'fuze-avatar-deploy-' + Date.now());
  fs.cpSync(distPath, tempDistPath, { recursive: true });
  console.log(`   Backed up to ${tempDistPath}`);

  // Step 6: Create or checkout target branch
  console.log(`🌿 Step 5: Switching to ${branchName} branch...`);
  try {
    // Try to checkout existing branch
    execSync(`git checkout ${branchName}`, { stdio: 'pipe' });
  } catch (e) {
    // Create new orphan branch if it doesn't exist
    console.log(`   Creating new ${branchName} branch...`);
    execSync(`git checkout --orphan ${branchName}`, { stdio: 'pipe' });
    execSync('git rm -rf .', { stdio: 'pipe' });
  }

  // Step 7: Copy dist contents to branch root
  console.log(`📂 Step 6: Copying build files to ${branchName} branch...`);

  // Remove all files except .git (including old dist!)
  const files = fs.readdirSync('.');
  files.forEach(file => {
    if (file !== '.git') {
      const filePath = path.resolve(file);
      if (fs.existsSync(filePath)) {
        fs.rmSync(filePath, { recursive: true, force: true });
      }
    }
  });

  // Copy backed up dist contents to root
  const distFiles = fs.readdirSync(tempDistPath);
  distFiles.forEach(file => {
    const srcPath = path.join(tempDistPath, file);
    const destPath = path.resolve(file);
    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // Clean up temp dist
  fs.rmSync(tempDistPath, { recursive: true, force: true });

  // Step 8: Commit and push
  console.log('✅ Step 7: Committing changes...');
  execSync('git add .', { stdio: 'inherit' });

  const commitMessage = `Deploy ${environment} build - ${new Date().toISOString()}`;
  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  } catch (e) {
    console.log('   No changes to commit');
  }

  console.log(`🚀 Step 8: Pushing to ${branchName} branch...`);
  execSync(`git push origin ${branchName} --force`, { stdio: 'inherit' });

  // Step 9: Return to original branch
  console.log(`🔙 Step 9: Returning to ${currentBranch} branch...`);
  execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });

  // Step 10: Restore stashed changes
  try {
    execSync('git stash pop', { stdio: 'pipe' });
  } catch (e) {
    // No stash to pop
  }

  // Step 11: Reinstall dependencies
  console.log('📦 Step 10: Reinstalling dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log(`\n✨ Successfully deployed to ${branchName} branch!\n`);
  console.log(`📍 Branch: ${branchName}`);
  console.log(`🔗 GitHub: https://github.com/pm-studios/fuze_avatar_hub/tree/${branchName}\n`);

} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);

  // Try to return to original branch on error
  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();
    if (currentBranch !== 'main') {
      execSync('git checkout main', { stdio: 'pipe' });
    }
  } catch (e) {
    // Ignore
  }

  process.exit(1);
}
