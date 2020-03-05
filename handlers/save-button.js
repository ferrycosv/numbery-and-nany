function saveItemHandler() {
    debugger;
    // read new item from user input
    const newInput = document.getElementById('input').value.trim();
    if (newInput === '') {
        alert("Please enter the input text");
        return;
    }
    // read from state the data you will need for the next step
    const checkNumber = Number(newInput);
    // find the new biggest and smallest values
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
      handler: 'save button',
      newInput,
      numbers: JSON.parse(JSON.stringify(entries))
    })
  }