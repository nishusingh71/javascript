// let str = "hello world";
// let str1 = "";
// let ch = str.charAt(0).toUpperCase();
// str1 += ch;
// for (let i = 1; i < str.length; i++) {
//     if (str.charAt(i) === '' && i < str.length - 1) {
//         str1 += str.charAt(i);
//         i++;
//         str += str.charAt(i).toUpperCase();
//     } else {
//         str1 += str.charAt(i);
//     }
// }
// console.log(str1);

class UpperCase {
    static toUpperCase(str) {
        let sb = "";
        let ch = str.charAt(0).toUpperCase();
        sb += ch;
        for (let i = 1; i < str.length; i++) {
            if (str.charAt(i) === ' ' && i < str.length - 1) {
                sb += str.charAt(i);
                i++;
                sb += str.charAt(i).toUpperCase();
            } else {
                sb += str.charAt(i);
            }
        }
        return sb;
    }
    static main(args) {
        let str = "hello world";
        console.log(UpperCase.toUpperCase(str));
    }
}

UpperCase.main();

