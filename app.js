"use strict";

function faktorial(n) {
    if (n < 0) {
        return "ədəd daxil edin.";
    } else if (n === 0) {
        return 1; // 0! = 1
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const number = parseInt(prompt("ədədi daxil edin:"));
const faktorialResult = faktorial(number);
alert(`Faktorial(${number}) = ${faktorialResult}`);