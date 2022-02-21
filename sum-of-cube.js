// Sum of Cube
// Sample Input : 12
// Sample Output : 6048

function sumofcube(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + (i * i * i);
    }
    return sum;
}

let a = 12;
var result = sumofcube(a);
console.log("The sum of cube of the given numbers : " + result);
