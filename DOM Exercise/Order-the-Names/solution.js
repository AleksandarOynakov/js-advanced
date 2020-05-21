function solve() {
    let div = document.getElementById('exercise').children[0];
    div.children[1].addEventListener('click', add);

    function add() {
        if (div.children[0].value.length > 0) {
            let li = document.getElementById('exercise').children[1].getElementsByTagName('li')
            let current = li[div.children[0].value[0].toUpperCase().charCodeAt() - 65].textContent;
            if (current.length > 0) {
                li[div.children[0].value[0].toUpperCase().charCodeAt() - 65].textContent += ', ';
            }
            li[div.children[0].value[0].toUpperCase().charCodeAt() - 65].textContent += div.children[0].value[0].toUpperCase() + div.children[0].value.slice(1).toLowerCase();
            div.children[0].value = '';
        }
    }
}