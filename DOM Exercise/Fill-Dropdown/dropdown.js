function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    if (text.value.length > 0 && value.value.length > 0) {
        let newOption = document.createElement('option');
        newOption.textContent = text.value;
        newOption.value = value.value;
        document.getElementById('menu').appendChild(newOption);
        text.value = '';
        value.value = '';
    }
}