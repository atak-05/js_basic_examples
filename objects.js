// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 37 -  Objects  //
console.log("------Exercise 37-Answer ---------");
/*Create an object literal called car with two properties: name and color.
 Print in the console the properties values.*/
let car  = {name : "Fiat",
            color: "Black"
        }

console.log(car.color);
console.log(car.name);
// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 38 -  For In  //
console.log("------Exercise 38-Answer ---------");
//Starting from the exercise 37, print the key of the car object
for(const key in car){
    console.log(key);
}

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 39 -  Value vs Reference  //
console.log("------Exercise 39-Answer ---------");
/*In the code below we have an object literal called user that has two properties: name and age.
 If we try to create a newUser starting from user and, after that, 
 we try to change the name, you'll notice that even the original user has been modified. 
How can we modify the name of newUser without changing the name of user? */

let user = {
    name: "Cosimo",
    age: 30,
    };
//Bu şekilde de atama yapabiliriz!
//*newUser2 = Object.assign({},user);   

let newUser = {...user};    
newUser.name= "Gizem" 
    console.log(newUser );
    console.log("-----");
    console.log(user);

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 40 -  Object Functions  //
console.log("------Exercise 40-Answer ---------");
//Starting from the exercise 39, do you know any other way to copy the user object without changing its properties?
//We can do other way
//*newUser2 = Object.assign({},user);  

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 41 -  Object Functions  //
console.log("------Exercise 41-Answer ---------");
/*We have an object literal called smartphone. 
By using a specific method, we can "freeze" the object, so it can't be modified. Do you know what kind of method we need?*/
const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
    };

    
Object.freeze(smartphone);    //so it has to change
smartphone.price = 100;
    
console.log(smartphone);


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 42 -  Constructor Function  //
console.log("------Exercise 42-Answer ---------");

/*Create a constructor function called Smartphone that takes in 3 parameters:
 brand,name, price. To create an object from a constructor function, we use the new keyword.
  Create two different objects.*/

  function smartphone2(brand,name,price){
    this.brand = brand;
    this.name = name ;
    this.price = price;
  }

  const samsung = new smartphone2("samsung","gizem","1000");
  console.log(samsung);


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 43 -  Nested  Objects  //
console.log("------Exercise 43-Answer ---------");
/* We want to add to the student object a nested object called personalData,
 that has 3 properties:name, surname, age. Print in the console the personalData object.*/ 

const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personelData: {name: "John", surname: "key",age:"18"}
    };
console.log(student.personelData);
