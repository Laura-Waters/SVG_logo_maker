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
            return `<svg width="300px" height="200px"><circle cx="100" cy="100" r="100" fill="${response.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        } else if (response.shape === 'Triangle') {
            return `<svg width="300px" height="200px"><polygon points="100,20 200,190 0,190" fill="${response.shapeColor}"/><text x="100" y="160" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        } else if (response.shape === 'Square') {
            return `<svg width="300px" height="200px"><rect width="200" height="200" x="0" y="0"  fill="${response.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
        }
        
    }
}

module.exports = Shape; 

