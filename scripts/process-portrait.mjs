import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const inputPath = process.argv[2];
const outputPath = path.join(root, 'images', 'student.png');

if (!inputPath) {
  console.error('Usage: node scripts/process-portrait.mjs <input-image>');
  process.exit(1);
}

async function main() {
  await fs.mkdir(path.join(root, 'images'), { recursive: true });
  const inputBuffer = await fs.readFile(inputPath);
  const blob = new Blob([inputBuffer], { type: 'image/png' });
  const removed = await removeBackground(blob, {
    output: { format: 'image/png', quality: 1 }
  });
  await fs.writeFile(outputPath, Buffer.from(await removed.arrayBuffer()));
  console.log('Saved:', outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
