function obj_arg(a, b, c) {
  arguments[0] = "hello"; //overide the value.
  console.log(arguments[0] + " " + arguments[1] + " " + arguments[2]);
  console.log("No. of Arguments = " + arguments.length);
}

obj_arg("Zulquar", "Nain", "Ansari");
