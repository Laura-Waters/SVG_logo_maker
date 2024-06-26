const inquirer = require('inquirer'); 
const { writeFile } = require('fs/promises');
const Shape = require('./shapes.js'); 

class CLI {
    constructor(text, textColor, shape, shapeColor) { 
        this.text = text;
        this.textColor = textColor;
        this.shape = shape; 
        this.shapeColor = shapeColor; 
    }

    run() {
        return inquirer
        .prompt([
            {
              type: 'input',
              message: ('Input up to three characters for your logo'),
              name: 'text',
              validate: function(value) {
                if (value.length <= 3) {
                    return true;
                } else {
                    throw new Error('Logo must be three characters or less.'); 
                }
              }
            },
            {
              type: 'input',
              message: ('What would you like the text color to be?'),
              name: 'textColor',
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
              name: 'shapeColor',
            },
          ])
          .then((response) => {
            const shape = new Shape(response.text, response.textColor, response.shape, response.shapeColor);
            const svgLogo = shape.render(response);
            return writeFile('./examples/logo.svg', svgLogo, 'utf8');
           })
           .then(() => {
            console.log('SVG logo successfully created!');
           })
           .catch((error) => {
            console.error('Error creating SVG logo:', error);
            });
          
    }
}

module.exports = CLI; 