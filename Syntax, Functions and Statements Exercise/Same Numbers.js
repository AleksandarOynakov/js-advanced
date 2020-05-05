function sameDigits(num) {
    num = String(num);
    let sum = 0;
    let same = true;
    let firstDigit = num[0];
    for (const digit of num) {
        if (digit !== firstDigit) {
            same = false;
        }
        sum += Number(digit);
    }
    console.log(same, '\n', sum);
}

sameDigits(2222);
sameDigits(1234);