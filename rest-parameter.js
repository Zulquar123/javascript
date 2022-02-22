function rest(a, ...args) {
  console.log("A = " + a + " B = " + args);
  console.log("First value of Rest Parametr : " + args[0]);
  console.log("Last value of Rest Parametr : " + args[7]);
}

rest(1, 2, 3, 4, 5, 6, 7, 8, 9);
