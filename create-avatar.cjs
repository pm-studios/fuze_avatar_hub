/**
 * 아바타 생성 스크립트
 * 얼굴 사진을 분석하고 파츠를 조합하여 아바타를 생성합니다.
 */

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

// 파츠 데이터베이스 로드
const partsDb = JSON.parse(
  fs.readFileSync('avatar-parts-database.json', 'utf-8')
);

/**
 * 선택된 파츠들을 조합하여 아바타 이미지를 생성합니다.
 */
async function createAvatar(
  hairId,
  eyebrowsId,
  eyesId,
  noseId,
  mouthId,
  beardId,
  outputPath = 'generated_avatar.png'
) {
  const partsDir = 'public/parts';

  // 파츠 파일 경로
  const parts = {
    hair: path.join(partsDir, `${hairId}.png`),
    eyebrows: path.join(partsDir, `${eyebrowsId}.png`),
    eyes: path.join(partsDir, `${eyesId}.png`),
    nose: path.join(partsDir, `${noseId}.png`),
    mouth: path.join(partsDir, `${mouthId}.png`),
    beard: path.join(partsDir, `${beardId}.png`),
  };

  try {
    // 헤어 이미지를 베이스로 로드 (얼굴 포함)
    const hairImage = await loadImage(parts.hair);
    const width = hairImage.width;
    const height = hairImage.height;

    // 캔버스 생성
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 레이어 순서대로 합성
    // 1. 헤어 (베이스 - 얼굴 포함)
    ctx.drawImage(hairImage, 0, 0);

    // 2. 수염 (얼굴 위에, 헤어 아래)
    const beardImage = await loadImage(parts.beard);
    ctx.drawImage(beardImage, 0, 0);

    // 3. 눈썹
    const eyebrowsImage = await loadImage(parts.eyebrows);
    ctx.drawImage(eyebrowsImage, 0, 0);

    // 4. 눈
    const eyesImage = await loadImage(parts.eyes);
    ctx.drawImage(eyesImage, 0, 0);

    // 5. 코
    const noseImage = await loadImage(parts.nose);
    ctx.drawImage(noseImage, 0, 0);

    // 6. 입
    const mouthImage = await loadImage(parts.mouth);
    ctx.drawImage(mouthImage, 0, 0);

    // 결과 저장
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    console.log(`아바타가 생성되었습니다: ${outputPath}`);

    return outputPath;
  } catch (error) {
    console.error('아바타 생성 중 오류:', error);
    throw error;
  }
}

/**
 * 얼굴 이미지를 분석하여 적합한 파츠를 선택합니다.
 *
 * 현재는 샘플 선택을 수행합니다.
 * 실제로는 AI 비전 모델을 사용하여 얼굴 특징을 분석해야 합니다.
 */
function analyzeFaceAndSelectParts(faceImagePath) {
  // TODO: 실제 얼굴 분석 로직 구현
  // 현재는 샘플 파츠 선택

  const selectedParts = {
    hair: 'C_Ava_H_005', // 옆으로 넘긴 중간 길이 스타일
    eyebrows: 'C_Ava_B_024', // 두껍고 직선형 눈썹
    eyes: 'C_Ava_E_006', // 사실적인 아몬드형 눈
    nose: 'C_Ava_N_001', // 유일한 코 파츠
    mouth: 'C_Ava_M_011', // 중립 표정
    beard: 'C_Ava_W_006', // 전체 수염
  };

  return selectedParts;
}

async function main() {
  const facePath = 'face.png';

  if (fs.existsSync(facePath)) {
    console.log(`얼굴 이미지 분석 중: ${facePath}`);
    const selected = analyzeFaceAndSelectParts(facePath);

    console.log('\n선택된 파츠:');
    for (const [partType, partId] of Object.entries(selected)) {
      console.log(`  ${partType}: ${partId}`);
    }

    // 아바타 생성
    console.log('\n아바타 생성 중...');
    const output = await createAvatar(
      selected.hair,
      selected.eyebrows,
      selected.eyes,
      selected.nose,
      selected.mouth,
      selected.beard,
      'generated_avatar.png'
    );

    console.log(`\n완료! 생성된 아바타: ${output}`);
  } else {
    console.error(`에러: ${facePath} 파일을 찾을 수 없습니다.`);
  }
}

main().catch(console.error);
