//requiring path and fs modules
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';




const inputPath = "./input";
const outputPath = "./output";

try {
    const files = await readdir(inputPath);
    for (const [index, file] of files.entries()) {
        if (file[0] != '.') {
            let filePath = path.join(inputPath, file);
            console.log(filePath);
            let outputFile;
            outputFile = path.join(outputPath, `${file.split(".")[0]}.avif`);
            await sharp(filePath).resize({ height: 100 }).avif().toFile(outputFile);
            outputFile = path.join(outputPath, `${file.split(".")[0]}.jpg`);
            await sharp(filePath).resize({ height: 100 }).flatten({ background: { r: 253, g: 248, b: 247 } }).jpeg().toFile(outputFile);

            outputFile = path.join(outputPath, `${file.split(".")[0]}@2x.avif`);
            await sharp(filePath).resize({ height: 200 }).avif().toFile(outputFile);
            outputFile = path.join(outputPath, `${file.split(".")[0]}@2x.jpg`);
            await sharp(filePath).resize({ height: 200 }).flatten({ background: { r: 253, g: 248, b: 247 } }).jpeg().toFile(outputFile);


            /*
                        outputFile = path.join(outputPath, `image-${index}.avif`);
                        await sharp(filePath).resize({ width: 650 }).grayscale().avif().toFile(outputFile);
                        outputFile = path.join(outputPath, `image-${index}@2x.avif`);
                        await sharp(filePath).resize({ width: 1300 }).grayscale().avif().toFile(outputFile);
                        outputFile = path.join(outputPath, `image-${index}.jpg`);
                        await sharp(filePath).resize({ width: 650 }).grayscale().jpeg().toFile(outputFile);
            
                        outputFile = path.join(outputPath, `image-${index}h.avif`);
                        await sharp(filePath).resize({ height: 550, width: 400, fit: 'cover', position: 'entropy' }).grayscale().webp().toFile(outputFile);
                        outputFile = path.join(outputPath, `image-${index}h@2x.avif`);
                        await sharp(filePath).resize({ height: 550, width: 400, fit: 'cover', position: 'entropy' }).grayscale().webp().toFile(outputFile);
                        outputFile = path.join(outputPath, `image-${index}h.jpg`);
                        await sharp(filePath).resize({ height: 550, width: 400, fit: 'cover', position: 'entropy' }).grayscale().jpeg().toFile(outputFile);
            */
        }
    }
} catch (err) {
    console.error(err);
}