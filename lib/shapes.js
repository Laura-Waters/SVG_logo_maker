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
            const circle = new Circle(this.text, this.textColor, this.shape, this.shapeColor);
            return circle.render(response);
        } else if (response.shape === 'Triangle') {
            const triangle = new Triangle(this.text, this.textColor, this.shape, this.shapeColor);
            return triangle.render(response);
        } else if (response.shape === 'Square') {
            const square = new Square(this.text, this.textColor, this.shape, this.shapeColor);
            return square.render(response);
        }
    }
        
}


class Circle extends Shape {
    render(response) {
        return `<svg width="300px" height="200px"><circle cx="100" cy="100" r="100" fill="${response.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
    }
};

class Triangle extends Shape {
    render(response) {
        return `<svg width="300px" height="200px"><polygon points="100,20 200,190 0,190" fill="${response.shapeColor}"/><text x="100" y="160" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
    }
}; 

class Square extends Shape {
    render(response) {
            return `<svg width="300px" height="200px"><rect width="200" height="200" x="0" y="0"  fill="${response.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text></svg>`;
    }
}

module.exports = Shape; 

