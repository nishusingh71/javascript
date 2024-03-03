let str = String(prompt("Enter a text"));
let result = "";
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    //lower case to upper case
    if (char >= 'a' && char <= 'z') {
        let upperCase = String.fromCharCode(char.charCodeAt(0) - 32);
        result += upperCase;
    }
    //upper case  to lower case
    else if (char >= 'A' && char <= 'Z') {
        let lowerCase = String.fromCharCode(char.charCodeAt(0) + 32);
        result += lowerCase;
    } else {

        result += char;
    }

}
console.log(result);

