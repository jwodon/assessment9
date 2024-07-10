function unroll(square) {
    const result = [];
    while (square.length) {
        // Remove and add the first row
        result.push(...square.shift());
        // Remove and add the last element of each remaining row
        for (let row of square) {
            result.push(row.pop());
        }
        // Remove and add the last row in reverse order
        if (square.length) {
            result.push(...square.pop().reverse());
        }
        // Remove and add the first element of each remaining row in reverse order
        for (let i = square.length - 1; i >= 0; i--) {
            result.push(square[i].shift());
        }
    }
    return result;
}

module.exports = unroll;
