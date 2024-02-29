//Airthmetic Operators
//Addition + using as operator overloading
let a = 10;
let b = 10;
console.log(a + b);

//Subtraction -
a = 20;
b = 10;
console.log(a - b);

//Multiplication *
a = 10;
b = 10;
console.log(a * b);

//Division / - it properly divides till reminder =0
a = 12;
b = 10;
console.log(a / b);

//Reminder %
a = 12;
b = 10;
console.log(a % b);


//Exponentiation
a = 2;
b = 10;
console.log(a ** b);

//String Concatenation with binary +
let firstName = "Nishu";
let lastName = "Singh";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Interview Question
console.log(10 + 10); //20
console.log(10 - 10); //0
console.log(10 * 10); //100
console.log(10 / 10); //1
console.log(10 % 10); //0
console.log(10 ** 10); //10000000000

console.log(10 + "10"); //1010
console.log(10 - "10"); //0
console.log(10 * "10"); //100
console.log(10 / "10"); //1
console.log(10 % "10"); //0
console.log(10 ** "10"); //10000000000

console.log("10" + "10"); //1010
console.log("10" - "10"); //0
console.log("10" * "10"); //100
console.log("10" / "10"); //1
console.log("10" % "10"); //0
console.log("10" ** "10"); //10000000000

console.log("abcd" + "10"); //1010
console.log("abcd" - "10"); //NaN
console.log("abcd" * "10"); //NaN
console.log("abcd" / "10"); //NaN
console.log("abcd" % "10"); //NaN
console.log("abcd" ** "10"); //NaN

//Numeric Conversion Unary +
let str = "10";
console.log(str, typeof str);
let number = +str;
console.log(number, typeof number);

str = "abcd";
console.log(str, typeof str);
number = +str;
console.log(number, typeof number);

//Operator Precedence
console.log(10 + 20 - 3 ** 3 / 20 * 30);
console.log(10 - 20 + 3 ** 3 / 20 * 30);
console.log(10 - 20 + 3 ** 3 * 20 / 30);

//Increment
//++
a = 10;
a++;//a=a-1
console.log(a);

//Postfix variable++
a = 10;
console.log(a++); //previous then increment
console.log(a);

//prefix ++variable
a = 10;
console.log(++a);
console.log(a);

//Decrement
//--
a = 10;
a--;
console.log(a);

//postfix variable--
a = 10;
console.log(a--);
console.log(a);

//prefix --variable
a = 10;
console.log(--a);
console.log(a);

a = 10;
console.log(a++ - ++a + --a + a-- + a);