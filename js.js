function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }


  const myFather = new Person("Eshmat", "Toshmat", 25, "blue");


  console.log( "My friend is " + myFather.age + ".");
