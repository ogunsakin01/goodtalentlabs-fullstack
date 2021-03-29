<!DOCTYPE html>
<html>
<body>

<?php


class Shapes {
    public $radius, $length, $breadth;
    public const pi = 3.142;
    public function __construct ($radius, $length, $breadth){
          $this->radius = $radius;
          $this->length = $length;
          $this->breadth = $breadth;
    }


}


class Circle extends Shapes {
//    public function __construct ($radius){
//        $this->radius=$radius;
//
//    }

    public function aCircle () {
        $message = 'The area of the circle will be '. self::pi * ($this->radius)**2;
        return $message;
    }

}

class Triangle extends Shapes {
    public function __construct ($base, $height, $side1, $side2, $side3){
        $this->base=$base;
        $this->height=$height;
        $this->side1=$side1;
        $this->side2=$side2;
        $this->side3=$side3;

    }

    public function aTriangle () {
        $message = 'The area of the triangle will be '. ($this->base * $this->height) * 0.5;
        return $message;
    }

    public function pTriangle (){
        $message2= 'The perimeter of the triangle will be '. ($this->side1 + $this->side2 + $this->side3);
        return $message2;
    }

}

class Square extends Shapes {
//    public function __construct ($length){
//        $this->length=$length;
//
//    }

    public function aSquare () {
        $message = 'The area of the square will be '. ($this->length)**2;
        return $message;
    }

}

class Rectangle extends Shapes {
//    public function __construct ($length, $breadth){
//        $this->length=$length;
//        $this->breadth=$breadth;
//
//    }

    public function aRectangle () {
        $message = 'The area of the rectangle will be '. $this->length * $this->breadth;
        return $message;
    }

}

$areaOfCircle = new Circle(3,0,0);
var_dump ($areaOfCircle ->aCircle());
echo "<br>";

$areaOfSquare = new Square(0, 5,0);
var_dump ($areaOfSquare ->aSquare());
echo "<br>";


$areaOfTriangle = new Triangle(3, 5, 4,5,7);
var_dump ($areaOfTriangle ->aTriangle());
echo "<br>";

var_dump($areaOfTriangle->pTriangle());
echo "<br>";


$areaOfRectangle = new Rectangle(0, 10, 7);
var_dump ($areaOfRectangle ->aRectangle());


?>

</body>

</html>

