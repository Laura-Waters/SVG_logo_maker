const Shape = require('./shapes.js');

describe('Shape', () => {
  
    describe('Circle', () => {
      it('should return an svg circle with correct specs', () => {
        const shape = new Shape;
        const testResponse = {
            text: 'MGM',
            textColor: 'white',
            shape: 'Circle',
            shapeColor: 'purple'
        };
  
        const expectedResult = `<svg width="300px" height="200px"><circle cx="100" cy="100" r="100" fill="purple"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="white">MGM</text></svg>`;
  
        expect(shape.render(testResponse)).toBe(expectedResult);
      });
    });

    describe('Triangle', () => {
        it('should return an svg triangle with correct specs', () => {
          const shape = new Shape;
          const testResponse = {
              text: 'MGM',
              textColor: 'white',
              shape: 'Triangle',
              shapeColor: 'purple'
          };
    
          const expectedResult = `<svg width="300px" height="200px"><polygon points="100,20 200,190 0,190" fill="purple"/><text x="100" y="160" font-size="50" text-anchor="middle" fill="white">MGM</text></svg>`;
    
          expect(shape.render(testResponse)).toBe(expectedResult);
        });
      });

      describe('Square', () => {
        it('should return an svg square with correct specs', () => {
          const shape = new Shape;
          const testResponse = {
              text: 'MGM',
              textColor: 'white',
              shape: 'Square',
              shapeColor: 'purple'
          };
    
          const expectedResult = `<svg width="300px" height="200px"><rect width="200" height="200" x="0" y="0"  fill="purple"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="white">MGM</text></svg>`;
    
          expect(shape.render(testResponse)).toBe(expectedResult);
        });
      });
  });
  

