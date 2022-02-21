var array1 = ["Kolkata", "Delhi", "Chennai", "Mumbai", "Hydrabaad", "Kolkata", "Mumbai", "Pune", "Mumbai", "Chennai"];
var array2 = [];
for (var i = 0; i < array1.length; i++) {
    var element = array1[i]
    if (array2.indexOf(element) == -1) {
        array2.push(element);
    }
}

for (i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}