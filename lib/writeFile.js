const { writeFile } = require('fs/promises');

class File {
    async writeFile(svgLogo) {
        try {
            await writeFile('logo.svg', svgLogo);
            console.log('Generated logo.svg');
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = File;