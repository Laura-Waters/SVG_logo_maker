const fs = require('fs'); 

const writeToFile = function(svgLogo) {
    fs.writeFile('logo.svg', svgLogo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}; 

