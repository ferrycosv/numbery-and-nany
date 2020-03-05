function resetItemHandler() {
  //debugger;
  // clear user input
  document.getElementById("input").value = '';
  // clear state data
  entries.nany = [];
  entries.numbery = [];
  // render data state to screen
  renderList();
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "reset button",
    numbers: JSON.parse(JSON.stringify(entries))
  }); 
}