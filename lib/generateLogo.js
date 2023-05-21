class Logo{
    constructor (text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
      }
}

class Shape{
}

class Circle extends Shape {
}

class Triangle extends Shape {
}

class Square extends Shape {
}
    
const logo = new Logo('AMA', 'green', 'circle', 'beige');
  
module.exports = generateLogo;
  