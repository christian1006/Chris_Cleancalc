let cleancalc = require('./cleancalc');

let args = process.argv.slice(2);
let operation = args[0];
let a = Number(args[1]);
let b = Number(args[2]);

if (isNaN(a)) {
    a = false;
};
if (isNaN(b)) {
    b = false;
};


let result = cleancalc.operate(operation, a, b);

console.log(result)