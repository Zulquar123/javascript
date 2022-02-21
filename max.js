function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num1 < num2 && num2 > num3)
        return num2;

    else {
        return num3;
    }
}

var a = 5;
var b = 1;
var c = 9;

var largest = max(a, b, c);
console.log(largest + " is the largest number ");