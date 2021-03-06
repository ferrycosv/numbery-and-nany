function saveItemHandler() {
  //debugger;
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
    entries.nany.push(newInput);
    if (hasDuplicates(entries.nany)) {
      entries.nany.pop();
    }
  } else {
    entries.numbery.push(checkNumber);
    if (hasDuplicates(entries.numbery)) {
      entries.numbery.pop();
    }
  }
  renderList();
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save button",
    newInput,
    numbers: JSON.parse(JSON.stringify(entries))
  });
}
