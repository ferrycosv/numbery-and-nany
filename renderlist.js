function renderList() {
    const numbery = document.getElementById('numbery');
    numbery.innerHTML = '';
    for (let c of entries.numbery) {
        const listItem = document.createElement('li');
        listItem.innerText = c;
        numbery.appendChild(listItem);
    }
    const nany = document.getElementById('nany');
    nany.innerHTML = '';
    for (let c of entries.nany) {
        const listItem = document.createElement('li');
        listItem.innerText = c;
        nany.appendChild(listItem);
    }
    document.getElementById('input').value = "";
}