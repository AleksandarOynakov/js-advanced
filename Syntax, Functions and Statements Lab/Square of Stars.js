function stars(count = 5) {
    for (let index = 0; index < count; index++) {
        console.log('* '.repeat(count));
    }
}

stars(2);