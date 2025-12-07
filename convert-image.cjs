const { loadImage, createCanvas } = require('canvas');
const fs = require('fs');

async function convertToPng() {
  try {
    const image = await loadImage('face.jfif');
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('face.png', buffer);
    console.log('변환 완료: face.png');
  } catch (error) {
    console.error('변환 실패:', error);
  }
}

convertToPng();
