const inquirer = require('inquirer'); 
const { writeFile } = require('fs/promises');
const Shape = require('./shapes.js'); 
const File = require('./writeFile.js'); 

class CLI {
    constructor() {

    }

    run() {
        return inquirer
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
            const svgLogo = new Shape; 
            new File (svgLogo); 
            });
    }
}

module.exports = CLI; 