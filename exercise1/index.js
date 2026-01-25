const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Define the file paths
const inputPath = path.join(__dirname, 'input_countries.csv');
const canadaFilePath = path.join(__dirname, 'canada.txt');
const usaFilePath = path.join(__dirname, 'usa.txt');

const readStream = fs.createReadStream(inputPath)
const writeCanadaStream = fs.createWriteStream(canadaFilePath)
const writeUSAStream = fs.createWriteStream(usaFilePath)

readStream.pipe(csv())
    .on('data', (row) => {
        if (row['country'] == 'Canada') {
            const line = JSON.stringify(row) + '\n';
            writeCanadaStream.write(line, (err) => {
                if (err) {
                    return console.error('Error writing chunk:', err);
                }
                console.log(`Info for ${row['country']}, year ${row['year']} written successfully`);
            });
        }

        else if (row['country'] == 'United States') {
            const line = JSON.stringify(row) + '\n';
            writeUSAStream.write(line, (err) => {
                if (err) {
                    return console.error('Error writing chunk:', err);
                }
                console.log(`Info for ${row['country']}, year ${row['year']} written successfully`);
            });
        }

    })
    .on('end', () => {
        console.log('CSV successfully processed');
    });