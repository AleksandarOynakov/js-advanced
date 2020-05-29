function addItem() {
    let list = document.getElementById('items');
    list.addEventListener('click',delItem);

    let newLi = document.createElement('li');
    newLi.innerHTML = `${document.getElementById('newText').value} <a href="#">[Delete]</a>`;
    document.getElementById('items').appendChild(newLi);

    function delItem(e){
        e.target.parentNode.remove();
    }
}