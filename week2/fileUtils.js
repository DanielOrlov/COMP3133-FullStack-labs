const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'input.txt');

// Read Directory
fs.readdirSync(__dirname).forEach(file => {
    console.log('Found file:', file);
    fs.statSync(path.join(__dirname, file)).isFile() && console.log(' - It is a file.');
    fs.statSync(path.join(__dirname, file)).isDirectory() && console.log(' - It is a directory.');
});

// check if file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
    console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
});

// File Stat
fs.stat(filePath, (err, stats) => {
    if (err) {
        return console.error('Error fetching file stats:', err);
    }
    console.log('File Stats:', stats);
    console.log('Stats isFile:', stats.isFile());
    console.log('Stats isDirectory:', stats.isDirectory());
    console.log('File Size:', stats.size, 'bytes');
});


