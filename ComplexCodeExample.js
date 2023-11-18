// File Name: ComplexCodeExample.js

// This is a complex code example demonstrating advanced JavaScript functionality
// It includes classes, inheritance, asynchronous operations, data manipulation, and more

// Define a base class
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getInfo() {
    return `Shape ${this.name} is ${this.color}`;
  }
}

// Inherit from the base class
class Circle extends Shape {
  constructor(name, color, radius) {
    super(name, color);
    this.radius = radius;
  }

  // Calculate area asynchronously
  async getArea() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const area = Math.PI * Math.pow(this.radius, 2);
        resolve(area);
      }, 1000);
    });
  }
}

// Inherit from the base class
class Rectangle extends Shape {
  constructor(name, color, width, height) {
    super(name, color);
    this.width = width;
    this.height = height;
  }

  // Calculate area synchronously
  getArea() {
    return this.width * this.height;
  }
}

// Create instances of Circle and Rectangle
const circle = new Circle("Circle", "Red", 5);
const rectangle = new Rectangle("Rectangle", "Blue", 10, 7);

// Perform asynchronous area calculation and log the results
circle.getArea().then((area) => {
  console.log(`Area of ${circle.name} is ${area}`);
});

// Log the information of both shapes
console.log(circle.getInfo());
console.log(rectangle.getInfo());

// Create an array of shapes
const shapes = [circle, rectangle];

// Filter shapes based on color and log their information
const filteredShapes = shapes.filter((shape) => shape.color === "Red");
filteredShapes.forEach((shape) => console.log(shape.getInfo()));

// Calculate total area of all shapes
const totalArea = shapes.reduce((acc, shape) => {
  if (shape instanceof Circle) {
    shape.getArea().then((area) => {
      console.log(`Area of ${shape.name} is ${area}`);
    });
  }
  return acc + shape.getArea();
}, 0);

console.log(`Total Area: ${totalArea}`);