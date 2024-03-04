let str = String(prompt("Enter a text"));
let result = "";
for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);
    //lower case to upper case
    if (currentChar >= 'a' && currentChar <= 'z') {
        let upperCase = String.fromCharCode(currentChar.charCodeAt(0) - 32);
        result += upperCase;
    }
    //upper case  to lower case
    else if (currentChar >= 'A' && currentChar <= 'Z') {
        let lowerCase = String.fromCharCode(currentChar.charCodeAt(0) + 32);
        result += lowerCase;
    } else {

        result += currentChar;
    }

}
console.log(result);

