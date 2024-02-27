//DataTypes
//Number-> 4 btyes
let number = 10;
console.log(number);
console.log("Data types:-" + typeof number);

//BigInt-> 8-10 bytes
let no = 1111111111111111111n;
console.log(no, typeof no);

//Boolean-1 bits (logical type)
//return true/false true-1,true-0

let boolean = false;
console.log(boolean, typeof boolean);

//Undefined:- Using Global Execution Context
let n;
console.log(n, typeof n);

//null -> prototype 
let nums = null;
console.log(nums, typeof nums);

//Array -size of array * datatypes bytes
let array = [10, 20, 30, 40];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
array[2] = 50;
console.log(array[2]);

//Strings
let firstName = "Nishu";
console.log(firstName, typeof firstName);
let fullName = "Nishu\nSingh";
fullName = "Nishu's";
console.log(fullName[4]);


//Objects
let object = {
    name: "Nishu",
    email: "abc@gmail.com"
}
console.log(object, typeof object);

//first method to access value of object is dot.
console.log(object.name);
console.log(object.email);

//second method to access value of object is [''].
console.log(object['name']);
console.log(object['email']);

//Symbol
let sym = Symbol("id");
console.log(sym, typeof sym);
//for print id only then
console.log(sym.description);

//Interaction:- alert, prompt and confirm
//Alert
alert("hello world");
//prompt
let name = prompt("Enter your name?");
console.log(name);
//confirm
let res = confirm("Are you over 18 ?");
console.log(res);

//Document
document.write("hello world!");
//console 4 types
console.log("hello");
console.dir("hello");
console.warn("hello");
console.error("hell");

