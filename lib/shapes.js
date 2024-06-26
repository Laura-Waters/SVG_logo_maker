const CLI = require('./cli.js');

class Shape {
    constructor(text, textColor, shape, shapeColor ) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape; 
        this.shapeColor = shapeColor; 

    } 
    render(response) {
        if (response.shape === 'Circle') {
            return `<svg width="300" height="200"><circle fill="${response.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        } else if (response.shape === 'Triangle') {
            return `<svg width="300" height="200"><polygon points="100,10 150,160 50, 160" fill="${response.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        } else if (response.shape === 'Square') {
            return `<svg width="300" height="200"><rect points="100,10 150,160 50, 160" fill="${response.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        }
        
    }
}

module.exports = Shape; 

