function subSum(arr, startIndex, endIndex) {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    try {
        let calcPart = arr.slice(startIndex, endIndex + 1);
        return calcPart.reduce((prev, cur) => Number(prev) + Number(cur), 0);
    } catch {
        return NaN;
    }
}

console.log(subSum('text', 0, 2))