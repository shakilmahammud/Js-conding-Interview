function fullName() {
    return "Hello, this is " + this.first + " " + this.last;
  }
  
  console.log(fullName()); 
  

  const person = {first: "Foo", last: "Bar"};
  console.log(fullName.bind(person)()); // => Hello this is Foo Bar