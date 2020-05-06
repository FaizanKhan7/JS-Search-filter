let filterInput = document.getElementById('filterInputs');

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
    let filterValue = document.getElementById('filterInputs').value.toLowerCase();
    // console.log(filterValue)

    // contacts
    let ul = document.getElementById('names');

    // contact
    let li = ul.querySelectorAll('li.contact');

    // loop through contact
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }
}