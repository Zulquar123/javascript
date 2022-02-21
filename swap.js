function swap(num1, num2) {
    var temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("After Swapping : a = " + num1 + " and b  = " + num2);
}

var a = 5;
var b = 7;
console.log("Before Swapping : a = " + a + " and b  = " + b);
swap(a, b);


