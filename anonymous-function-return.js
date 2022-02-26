function display(a) {
  return function (b) {
    return a + b;
  };
}

var af = display(10);

console.log(af(8));
