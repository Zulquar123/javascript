var arrays = [12, 14, 61, 36, 42];
var max = arrays[0];
for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > max) {
        max = arrays[i];
    }
}

console.log("The Largest Element in Array is : " + max);