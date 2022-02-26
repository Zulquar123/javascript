function display(message) {
  return message();
}

console.log(
  display(function () {
    return "Hello Code With Zulquar ";
  })
);
