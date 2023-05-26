class Shape{
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
      }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, shape) {
        super(text, textColor, shapeColor);
        this.shape = shape;
      }
      render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
      }
    } 
    module.exports = Circle;

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, shape) {
      super(text, textColor, shapeColor);
      this.shape = shape;
    }
      render() {
        return `<polygon points="0 20, 100 20, 100 0, 0 100" fill="${this.shapeColor}" />`;
      }
    }
    module.exports = Triangle;

class Square extends Shape {
    constructor(text, textColor, shapeColor, shape) {
      super(text, textColor, shapeColor);
      this.shape = shape;
    }
      render() {
        return `<rect width="100" height="100" rx="15" fill="${this.shapeColor}" />`;
      }
    }
    module.exports = Square;