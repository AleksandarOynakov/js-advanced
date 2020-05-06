function diagSum(matrix) {
    let mainDiag = 0;
    let secDiag = 0;
    for (let index = 0; index < matrix.length; index++) {
        mainDiag += matrix[index][index]
        secDiag += matrix[index][matrix.length - 1 - index];
    }
    console.log(mainDiag, secDiag);
}

diagSum([[20, 40],
[10, 60]]);