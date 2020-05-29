function deleteByEmail() {
    let allUsers = document.getElementById('customers').getElementsByTagName('td');

    let current = document.getElementsByTagName('input')[0];

    let found = false;
    for (let cust of allUsers) {
        if(cust.textContent === current.value){
            cust.parentNode.remove();
            current.value = '';
            document.getElementById('result').textContent = 'Deleted.'
            found = true;
        }
    }

    if(!found){
        document.getElementById('result').textContent = 'Not found.'
    }
}