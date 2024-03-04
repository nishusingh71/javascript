//First Letters should be first.
let str = "i like programming.";
let result = "";
let capsNext = true;
for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);
    if (currentChar >= 'a' && currentChar <= 'z' && capsNext) {
        result += String.fromCharCode(currentChar.charCodeAt(0) - 32);
    } else {
        result += currentChar;
    }
    capsNext = (currentChar === ' ' || currentChar === '.' || currentChar === ',' || currentChar === '!' || currentChar === '?');
}
console.log(result);
