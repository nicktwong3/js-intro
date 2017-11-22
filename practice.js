/*
  1.  STRING

  Given the address:
  350 3rd St. San Francisco, CA 94017

  1.1 Create 5 different variables (streetNumber, street, city, state, and zipCode)
      that hold the address info above as string values.

      e.g.  variable streetNumber should have the string value of '350'
            variable street should have the string value of '3rd St.'

  1.2 Create another string variable called fullAddress that has the full address string value 
      (line 5). You must use the 5 different variables that you created from step 1. 
      console log this variable.
*/

// 1.1
// TODO: code goes here
var streetNumber = '350';
var street = '3rd St.';
var city = 'San Francisco';
var state = 'CA';
var zipCode = '94017';
// 1.2
// TODO: code goes here
// console.log(fullAddress);
var fullAddress = streetNumber + ' ' +street+ ' ' +city+ ', ' +state+ ' ' +zipCode;
console.log(fullAddress);

/*
  2.  NUMBER

  2.1 Create 2 differnt variables called n1 and n2. variable n1 will have the number value of 100,
      n2 will have the value of 5.

  2.2 Create 4 different variables (sum, difference, product, quotient)
        variable sum will have the value of n1 plus n2 (addition)
        variable difference will have the value of n1 minus n2 (subtraction)
        variable product will have the value of n1 times n2 (multiplication) 
        variable quotient will have the value of n1 divided by n2 (division)

      console log your answers
*/

// 2.1
// TODO: code goes here
var n1 = 100;
var n2 = 5;
// 2.2
// TODO: code goes here
var sum = n1+n2;
var difference = n1-n2;
var product = n1*n2;
var quotient = n1/n2;
console.log (sum, difference, product, quotient);

/*
  3.  BOOLEAN

  Boolean varibales can only have the value of true or false.
  There are two ways to generate boolean value for a variable.
  - You can directly assign the value of true or false
  - value comparison will return a boolean value
      i.  Value comparison is when you compare 2 value to see if they satisfy the comparison
      ii. To compare 2 values, use comparison operators ==, !=, <, <=, >, >=, ===, !==
          e.g.  100 == 100 will return true (code translation: 100 is equal to 100, so this is true)
                100 != 100 will return false (translation: 100 doesn't equal to 100, so this is false)
                100 > 100 will return false (translation: 100 is greater than 100, so this is false)
                100 >= 100 will return true (translation: 100 is greater than or equal to 100, true)

  3.1 We can check your STRING and NUMBER variable answers from above with value comparison.
        check the variable fullAddress is equal to the string '350 3rd St. San Francisco, CA 94017'
        check the variable sum is equal to the number 105
        check the variable difference is 95
        check the variable product is equal to 500
        check the variable quotient is equal to 20

      console log your answers. all comparison should be true if you did everything correctly

  3.2 Create a variabled called isSF. Assign a boolean value to it by compairing the variable city to
      the string 'San Francisco' (is variable city equal to the string value of 'San Francisco')
      The value should be true.
*/

// 3.1
// TODO: code goes here
var boolFullAddress = fullAddress == '350 3rd St. San Francisco, CA 94017';
var boolSum = sum == 105;
var boolDiff = difference == 95;
var boolProd = product == 500;
var boolQuot = quotient == 20;
console.log(boolFullAddress, boolSum, boolDiff, boolProd, boolQuot);
// 3.2
// TODO: code goes here


/*
  4.  FUNCTION

  Function sometimes take in parameters and sometimes will need to return a result from the function.
  If you need to return a value from a function, you must include a return code in the function

  e.g.
  function createFullName(first, last) {
    return first + ' ' + last; // returning a string based on the parameters
  }

  function createFullName2(first, last) {
    var fullName = first + ' ' + last;
  }
  
  var name = createFullName('Zhen', 'Zheng');
  // name is 'Zhen Zheng'

  var name2 = createFullName2('Zhen', 'Zheng');
  // name is undefined because createFullName2 is not returning anything
  // to fix this, you can return the variable fullName in createFullName2 or just do it like the first one

  4.1 Create a function called 'addition' that takes 2 parameters (x and y),
      return the sum of the 2 parameters.

      If you are comfortable enough, create functions for subtraction, multiplication, and division.
      or create functions that take in 1 parameter 
        - funciton double(x). if I run double(6), this should return 12, double(15) should return 30.
        - function square(x). if I run square(6), this should return 36, square(15) should return 225.
*/

// 4.1
// TODO: code goes here
var addition = function (x, y) {
  return x+y;
}
function subtraction (x, y) {
  return x-y;
}
var multiplication = function (x, y) {
  return x*y;
}
function division (x, y) {
  return x/y;
}
var double = function (x) {
  return 2*x;
}
function square (x) {
  return x*x;
}
/*
var x = parseInt(prompt('Enter x: '));
var y = parseInt(prompt('Enter y: '));
console.log(addition(x, y), subtraction(x, y), multiplication(x, y), division(x, y), double(x), square(x));
*/

/*
  5.  OBJECT

  Given a car's info
  year      1972
  make      'Datsun'
  model     '240z'
  mileage   173937
  color     'yellow'
  plate     '123xyz'
  manual    true
  forSale   false

  5.1 Create an object called car, the car object will have the above properties and values

  5.2 After the car object is created, get the model of the car using that object. console log the answer

  5.3 Write an if statement. condition is:
      if the car is older than 30 years
        print 'Classic car.' in console
      else print 'Not a classic car.' in console

*/

// 5.1
// TODO: code goes here
var cars = [{
  year: 1972,
  make: 'Datsun',
  model: '240z',
  mileage: '173937',
  color: 'yellow',
  plate: '123xyz',
  manual: true,
  forSale: false
},
{
  year: 2000,
  make: 'Datsun',
  model: '240z',
  mileage: '173937',
  color: 'yellow',
  plate: '123xyz',
  manual: true,
  forSale: false
}];
// 5.2
// TODO: code goes here
console.log(cars[0].model);
// 5.3
// TODO: code goes here
function isClassicCar (car) {
if(new Date().getFullYear()-car.year>=30)
  console.log('Classic car.');
else
  console.log('Not a classic car.');
}
for(var i=0;i<cars.length;i++)
  isClassicCar(cars[i]);

/* 
  6.  ARRAY
  
  6.1 Create an array called colors and it has the following string values:
      red white blue green yellow

  6.2 Get the color blue from the array. console log the answer

  6.3 Write a for loop to loop through the array and console log the colors 
*/

// 6.1
// TODO: code goes here
var colors = ['red', 'white', 'blue', 'green', 'yellow'];
// 6.2
// TODO: code goes here
console.log(colors[2]);
// 6.3
// TODO: code goes here
for(var i=0;i<colors.length;i++)
  console.log(colors[i]);

