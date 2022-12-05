import {
    readdir,
    readFile
} from 'fs/promises';

import sharp from 'sharp';
// https://github.com/lovell/sharp
console.log("--- Converting ---");

const folder = new URL('../src/assets/img/photos/', import.meta.url);
try {
    readdir(folder).then(
        files => {
            for (const file of files) {
                const fileURL = new URL(`../src/assets/img/photos/${file}`, import.meta.url);
                readFile(fileURL.pathname)
                    .then(fileBuffer =>
                        sharp(fileBuffer)
                            .toFile(`./src/assets/img/photos/${file}.webp`,
                                (err, info) => { console.log({ err, info }); }));

            }
        }
    );

} catch (err) {
    console.error(err);
}

/*
fs.readFile('./day-4/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});*/;