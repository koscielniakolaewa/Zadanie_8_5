// scripts.js

var a = 2;
var b = -4;
var value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
    console.log('Dodatni');
} else if (value < 0) {
    console.log('Ujemny');
} else {
    console.log('Zero');
}