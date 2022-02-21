function factorial(num) {
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f = f * i;
    }
    return f;
}
var a = 5;
var result = factorial(a);

console.log("The Factorial of " + a + " is " + result);