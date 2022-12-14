var Cone = /** @class */ (function () {
    //A=πr(r+h2+r2)
    function Cone(radius, height) {
        var _this = this;
        this.pi = 3.14;
        this.calculatearea = function () {
            return console.log(_this.pi *
                _this.radius *
                (_this.radius + _this.height * _this.height + _this.radius * _this.radius));
        };
        this.printname = function () { return console.log("Cone"); };
        this.radius = radius;
        this.height = height;
        //this.pi=pi;
    }
    return Cone;
}());
var Sphere = /** @class */ (function () {
    //A=πr(r+h2+r2)
    function Sphere(radius) {
        var _this = this;
        this.pi = 3.14;
        this.calculatearea = function () { return console.log(4 * _this.pi * _this.radius * _this.radius); };
        this.printname = function () { return console.log("Sphere"); };
        this.radius = radius;
    }
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    //A=πr(r+h2+r2)
    function Rectangle(lenght, width) {
        var _this = this;
        this.calculatearea = function () { return console.log(_this.lenght * _this.width); };
        this.printname = function () { return console.log("Rectangle"); };
        this.lenght = lenght;
        this.width = width;
    }
    return Rectangle;
}());
var cone = new Cone(2, 2);
var sphere = new Sphere(2);
var rectangle = new Rectangle(2, 2);
cone.printname();
cone.calculatearea();
sphere.printname();
sphere.calculatearea();
rectangle.printname();
rectangle.calculatearea();
