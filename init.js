window.onload = () => {
  //debugger;
  // render initial state
  renderList();
  // log initial state
  const copyOfState = JSON.parse(JSON.stringify(entries));
  log.push({
    initialEntry: copyOfState
  });
}
