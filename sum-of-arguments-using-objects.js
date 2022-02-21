function sum(a, b, c, d, e) {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  console.log("Sum Of Arguments = " + sum);
}

sum(1, 2, 3, 4, 5);
