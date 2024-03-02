// Lower case to upper case 
let str = "NISHU";
let res = "";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let capitalizied=true;
for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i];
    for (let j = 0; j <= lowerCase.length - 1; j++) {
        if (char === lowerCase[j]) {
            res += upperCase[j];
        } else if (char === upperCase[j]) {
            res += lowerCase[j];
        }
    }
}
console.log(res);

//Capitalized First Letter.