interface Shape {
  shapename: string;

  printname();
}
class Cone implements Shape {
  shapename: "Cone";
  radius: number;
  height: number;
  pi: number = 3.14;
  //A=πr(r+h2+r2)
  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
    //this.pi=pi;
  }
  calculatearea = () =>
    console.log(
      this.pi *
        this.radius *
        (this.radius + this.height * this.height + this.radius * this.radius)
    );
  printname = () => console.log("Cone");
}
class Sphere implements Shape {
  shapename: "Sphere";
  radius: number;

  pi: number = 3.14;
  //A=πr(r+h2+r2)
  constructor(radius: number) {
    this.radius = radius;
  }
  calculatearea = () => console.log(4 * this.pi * this.radius * this.radius);
  printname = () => console.log("Sphere");
}
class Rectangle implements Shape {
  shapename: "Rectangle";
  lenght: number;
  width: number;
  //A=πr(r+h2+r2)
  constructor(lenght: number, width: number) {
    this.lenght = lenght;
    this.width = width;
  }
  calculatearea = () => console.log(this.lenght * this.width);
  printname = () => console.log("Rectangle");
}
let cone = new Cone(2, 2);
let sphere = new Sphere(2);
let rectangle = new Rectangle(2, 2);

cone.printname();
cone.calculatearea();
sphere.printname();
sphere.calculatearea();
rectangle.printname();
rectangle.calculatearea();
