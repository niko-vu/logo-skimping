// While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes

// Creating shape classes
class Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
};

const circle = new Shape('circle', 'red');
const triangle = new Shape('triangle', 'black');
const square = new Shape('square', 'blue')