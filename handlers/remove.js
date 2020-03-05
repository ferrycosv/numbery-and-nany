function removeItemHandler() {
  debugger;
  // read new item from user input
  const newInput = document.getElementById("input").value.trim();
  if (newInput === "") {
    alert("Please enter the input text");
    return;
  }
  // var to validate if is a string
  const checkNumber = Number(newInput);
  // check if is number or string
  if (isNaN(checkNumber)) {
    entries.nany = entries.nany.filter(function(value, index, arr) {
      return value !== newInput;
    });
  } else {
    entries.numbery = entries.numbery.filter(function(value, index, arr) {
      return value !== checkNumber;
    });
  }
  renderList();
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "remove button",
    newInput,
    numbers: JSON.parse(JSON.stringify(entries))
  });
}
