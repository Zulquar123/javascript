// Rest Parameters

function Rest_parameter(a, ...args) {
  console.log("A = " + a);
  console.log("Length of Rest Parametr : " + args.length);
}
Rest_parameter(10, 20, 30, 40, 50, 60, 70, 80);

// Arguments Object

function Arguments_object(a) {
  console.log("A = " + a);
  console.log("Length of Arguments Object : " + arguments.length);
}
Arguments_object(10, 20, 30, 40, 50, 60, 70, 80);
