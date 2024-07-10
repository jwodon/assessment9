const unroll = require('./unroll');

describe('#unroll', function () {
    it('is a function', function () {
        expect(typeof unroll).toEqual('function');
    });

    it('handles a 4x4 square', function () {
        const square = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    it('handles a 3x3 square', function () {
        const smallerSquare = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
        ];
        expect(unroll(smallerSquare)).toEqual(['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']);
    });

    it('handles a 2x2 square', function () {
        const smallSquare = [
            [1, 2],
            [3, 4],
        ];
        expect(unroll(smallSquare)).toEqual([1, 2, 4, 3]);
    });

    it('handles a 1x1 square', function () {
        const singleElementSquare = [[1]];
        expect(unroll(singleElementSquare)).toEqual([1]);
    });

    it('handles an empty array', function () {
        const emptySquare = [];
        expect(unroll(emptySquare)).toEqual([]);
    });
});
