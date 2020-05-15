function arrSort(arr, sortBy) {
    let sorter = filter();
    return sorter[sortBy](arr);
    function filter() {
        return {
            asc: (s) => s.sort((a, b) => a - b),
            desc: (s) => s.sort((a, b) => b - a)
        }
    }
}


console.log(arrSort([14, 7, 17, 6, 8], 'asc'));

// [6, 7, 8, 14, 17]

// [14, 7, 17, 6, 8], 'desc'

// [17, 14, 8, 7, 6]
