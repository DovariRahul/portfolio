
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = "C:\\Users\\D.RAHUL\\Downloads\\RAHUL-resume (1).pdf";
const publicDir = path.join(__dirname, 'public');
const destPath = path.join(publicDir, 'resume.pdf');

console.log(`Checking source: ${sourcePath}`);
if (!fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    process.exit(1);
}

if (!fs.existsSync(publicDir)) {
    console.log(`Creating directory: ${publicDir}`);
    fs.mkdirSync(publicDir, { recursive: true });
}

console.log(`Copying to: ${destPath}`);
try {
    fs.copyFileSync(sourcePath, destPath);
    console.log('File copied successfully!');
} catch (err) {
    console.error('Error copying file:', err);
    process.exit(1);
}
