//First Letters should be first.
let str = String(prompt("Enter a text"));
let result = "";
let capsNext = true;
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (capsNext) {
        result += char >= 'a' && char <= 'z' ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
    } else {
        result += char;
    }
    capsNext = (char === '' || char === '.' || char === ',' || char === '!' || char === '?');
}
console.log(result);