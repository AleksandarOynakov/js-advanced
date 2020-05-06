function subsequence(array) {
    let max = Number.MIN_SAFE_INTEGER;
    array.forEach(element => {
        if (element >= max) {
            max = element;
            console.log(max);
        }
    });
}

subsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);