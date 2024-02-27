//Type Conversion
//String Conversion
// Number
let number = 10;
console.log(number, typeof number);
// convert number to String
let str = String(number);
console.log(str, typeof str);

//boolean
let boolean = true;
console.log(boolean, typeof boolean);
//convert boolean to String
str = String(boolean);
console.log(str, typeof str);

//Numeric Conversions
//String 
str = "10";
console.log(str, typeof str);
//convert String into Number
number = Number(str);
console.log(number, typeof number);

//boolean
boolean = true;
console.log(boolean, typeof boolean);
//convert boolean to Numeric using logical true-1, false-0
number = Number(boolean);
console.log(number, typeof number);

//boolean Conversion
//Number
number = 10;
console.log(number, typeof number);
//convert number to boolean where only 0-false and other case always true.
boolean = Boolean(number);
console.log(boolean, typeof boolean);

//String
str = "DuCAT";
console.log(str, typeof str);
//convert String to boolean where ""->false and other case always true.
boolean = Boolean(str);
console.log(boolean, typeof boolean);