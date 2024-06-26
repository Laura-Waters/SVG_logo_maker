const { writeFile } = require('fs/promises');
const { join } = require('path'); // Import the 'join' function from the 'path' module

class File {
    async writeFile(svgLogo) {
        try {
            await writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svgLogo);
            console.log('Generated logo.svg');
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = File;
