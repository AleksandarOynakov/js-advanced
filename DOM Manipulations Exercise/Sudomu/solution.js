function solve() {
    let quickCheck = document.getElementsByTagName('button')[0];
    let clearButton = document.getElementsByTagName('button')[1];
    let tableRows = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let requested = [1, 2, 3];

    quickCheck.addEventListener('click', check);
    clearButton.addEventListener('click', () => {
        for (const row of Array.from(tableRows)) {
            let valuesRows = row.getElementsByTagName('input');
            for (const value of Array.from(valuesRows)) {
                value.value = '';
                document.getElementsByTagName('table')[0].style.border = 'none';
                document.getElementById('check').children[0].textContent = '';
            }
        }
    })

    function check() {
        let validRows = 0;
        let validCols = 0;
        for (const row of Array.from(tableRows)) {
            let valuesRows = row.getElementsByTagName('input');
            let arrValues = Array.from(valuesRows).map(el => Number(el.value));

            if (requested.every(el => arrValues.includes(el))) {
                validRows++;
            }
        }
        let valuesCol = [];
        for (let col = 0; col < 3; col++) {

            for (const row of Array.from(tableRows)) {
                valuesCol.push(Number(row.getElementsByTagName('input')[col].value));
            }
            if (requested.every(el => valuesCol.includes(el))) {
                validCols++;
            }
            valuesCol = [];
        }
        if (validCols === 3 && validRows === 3) {
            document.getElementsByTagName('table')[0].style.border = '2px solid green';
            document.getElementById('check').children[0].style.color = 'green';
            document.getElementById('check').children[0].textContent = 'You solve it! Congratulations!';
        } else {
            document.getElementsByTagName('table')[0].style.border = '2px solid red';
            document.getElementById('check').children[0].style.color = 'red';
            document.getElementById('check').children[0].textContent = 'NOP! You are not done yet...';
        }
    }
}