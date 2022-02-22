function default_parameter(a, b, c = 7) {
  console.log("A = " + a + "  B = " + b + " C = " + c);
}

// default_parameter(8, 9);

default_parameter(8, 9, 11); // 11 Overide 7.
