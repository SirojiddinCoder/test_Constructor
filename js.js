// // function Person(first, last, age, eye) {
// //     this.firstName = first;
// //     this.lastName = last;
// //     this.age = age;
// //     this.eyeColor = eye;
// //   }


// //   const myFather = new Person("Eshmat", "Toshmat", 25, "blue");


// //   console.log( "My friend is " + myFather.age + ".");

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
//   const myCar = new Car("Cobalt", 2021);
// console.log(myCar.name + ' ' + myCar.year);


class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "WebBrain Academy";
    }
  }

  let myCar = new Car("Cobalt");

  console.log(Car.hello());