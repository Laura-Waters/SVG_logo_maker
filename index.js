// DEPENDENCIES 
const inquirer = require('inquirer'); 
const fs = require('fs'); 

const writeToFile = function(svgLogo) {
    fs.writeFile('logo.svg', svgLogo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}; 

inquirer
  .prompt([
    {
      type: 'input',
      message: ('Input three characters for your logo'),
      name: 'text',
    },
    {
        type: 'input',
        message: ('What would you like the text color to be?'),
        name: 'text-color',
    },
    {
        type: "list",
        message: "What shape would you like to use?",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],
    }, 
    {
        type: 'input',
        message: ('What color would you like the logo to be?'),
        name: 'shape-color',
    },
  ])
  .then((response) => {
    const svgLogo = formattedResponse(response, licenseLink); 
    writeToFile(svgLogo);
    }
); 