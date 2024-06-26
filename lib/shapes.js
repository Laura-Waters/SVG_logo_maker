const CLI = require('./cli.js'); 

class Shape {
    constructor() {

    } 
    render() {
        if (response.shape === 'Circle') {
            return `<svg width="300" height="200"><circle fill=${response.shape-color}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${response.text-color}>${response.text}</text></svg>`;
        } else if (response.shape === 'Triangle') {
            return `<svg width="300" height="200"><polygon points="100,10 150,160 50, 160" fill=${response.shape-color}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${response.text-color}>${response.text}</text></svg>`;
        } else if (response.shape === 'Square') {
            return `<svg width="300" height="200"><rect points="100,10 150,160 50, 160" fill=${response.shape-color}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${response.text-color}>${response.text}</text></svg>`;
        }
        
    }
}

module.exports = Shape; 

