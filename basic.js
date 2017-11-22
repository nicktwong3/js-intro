/*
* 
*     VARIABLES
*
*/

/*
  Variable Naming Rules:
  - variable name can’t begin with a number
  - variable name can’t use any special characters (`~!@#$%^&*()+=-?.,:;”’{}[]\|/<>) except underscore ‘_’;

  example:
  WRONG     var 123abc;
  CORRECT   var abc123; var a1b;

  WRONG     var first-name; var first.name
  CORRECT   var first_name; var firstName
*/

/*
  How to create/define an empty variable
*/

var person;
// we didn't assign anything to the variable (person) above so the value of this variable is undefined;
console.log('Undefined variable "person": ', person); // you should see undefined in the console

/*
  Variable Calling Rules
  - varible name must be defined first
  - if we call a variable that has not been defined yet, js will throw an error

  example:
  WRONG     anotherPerson; (js will throw an error in the console 'anotherPerson is not defined') 
  CORRECT   var anotherPerson;

  if you comment out line 24 (var person;), line 26 will throw an error in console because 'person' is not defined
*/

/*
  assigning value to variables
*/

// equal sign "=" will asign the right side (value) to the left side (variable)
person = 'Osborne'; // var person = 'Osborne'; if you haven't already defined the 'person' variable;
console.log('After assignment, "person": ', person);


/*
*
*     Data Types
*
*/

// A variable can hold different types of data such as String, Number, Boolean, Object, Array, and Function

/*
  Basic: String, Number, Boolean, and Function
*/
var a = 'San Francisco';      // String - ANYTHING IN A QUOTATION IS A STRING - single quotes 'a', double quotes "a", or back ticks `a`
var b = 123;                  // Number
var c = true;                 // Boolean
var d = function() {          // Function
  alert('I am a function');
};
// the above function is the same as:
//
// function d() {
//   alert('I am a function');
// };

// to check a variable's data type, just type typeof in front of the variable name
console.log('variable a is a ', typeof a);
console.log('variable b is a ', typeof b);
console.log('variable c is a ', typeof c);
console.log('variable d is a ', typeof d);

/*
  complex: Object, and Array
*/

/* Object initialization */
var e = {};                  // empty object
var f = { name: 'Osborne' }; // Object format { propertyName: value }

console.log('variable d is a ', typeof d);

/* Array Initialization */
var g = []; // empty Array
var h = [1, 2, 3, 4, 5]; // Object format [value, value, value]

console.log('variable f is a ', typeof f);

// inside an Object or Array, the value can be anything (String, Number, Boolean, Object, Array, or Function)
// each item/property must be separated by a comma ','
var person = {      // Object with mixed data types
  name: 'Osborne',    // person.name is a String
  age: 18,            // person.age is a Number
  isTrainer: true,    // person.isTrainer is a Boolean
  exercises: [        // person.exercises is an Array of Strings
    'Pole',             // person.exercises[0] is a String
    'Dead Lift',
    'Squat'
  ],
  sayHi: function() { // person.sayHi is a function
    console.log(this.name + ' says hi'); // the word 'this' is referencing to this current object 'person, 'this.name' is the same as 'person.name'
  }
};

// Array of Objects
var people = [
  {
    name: 'Osborne',
    age: 18,
    isTrainer: true,
    exercises: [
      'Pole',
      'Dead Lift',
      'Squat'
    ]
  }, {
    name: 'Allison',
    age: 18,
    isTrainer: false,
    exercises: [
      'Pole',
      'Lyra',
      'Yoga'
    ]
  }
];

// Normally an array will have the same type of data as values, but it's extremely rare that they have mixed data types
var mixedDataTypesArray = [       // NO ONE WILL EVER DO THIS, but it is valid
  'string',             // String
  123,                  // Number
  true,                 // Boolean
  { name: 'Osborne' },  // Object
  [1, 2, 3]             // Array. yes there will be array of arrays
];

/*
  Getting info from Object
*/

// Let's use the person object above (line 96)
// To get property value from an Object, simply use dot '.' after the object name, then the property name
person.name;
console.log('person.name: ', person.name); // to see it in console

// if you call something that is not in the object properties, don't worry it will simply tell you that it's undefined
person.height;
console.log('person.height: ', person.height); // undefined

/*
  Getting info from Array
*/

// To get any value in an array, you have to know their indexes (position), and index is a number
// and each array starts at index 0
var fruits = ['apple', 'orange', 'pear', 'strawberry', 'watermelon'];
//              0          1        2         3             4

fruits[0]; // apple
fruits[1]; // orange

console.log('value at index 1 in fruits array is: ', fruits[1]); // to see it in console

// if you are calling an index that is not between 0 and the length of the array, it will return undefined
fruits[99];
fruits[-5];
console.log('Out of bound index 99: ', fruits[99]);

/*
  Writing a function
*/

// Syntax: you start with the word 'function', then the function name, then the parameters/inputs go inside the parentheses '(parameter)'
// example:
function functionName (parameter1, parameter2) {
  // do something;
};

/*
  Executing/Runing a function
*/
// creating a function called alert that takes in 1 parameter
function welcome (name) {
  console.log('Welcome, ' + name)
};
// to run this function. simply add parenthese after the function name
welcome('Osborne');
welcome; // this doesn't run the function

// to run the function in object person (line 96)
person.sayHi();

console.log(welcome);
