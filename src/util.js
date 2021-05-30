const getNeighbors = (i, j) => {
    if (i === 0) {
        if (j === 0) {
            return [
                [i + 1, j],
                [i + 1, j + 1],
                [i, j + 1],
            ];
        } else if (j === 59) {
            return [
                [i + 1, j],
                [i + 1, j - 1],
                [i, j - 1],
            ];
        } else {
            return [
                [i, j + 1],
                [i, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
                [i + 1, j - 1],
            ];
        }
    } else if (i === 39) {
        if (j === 0) {
            return [
                [i - 1, j],
                [i - 1, j + 1],
                [i, j + 1],
            ];
        } else if (j === 59) {
            return [
                [i - 1, j],
                [i - 1, j - 1],
                [i, j - 1],
            ];
        } else {
            return [
                [i, j + 1],
                [i, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i - 1, j - 1],
            ];
        }
    } else {
        if (j === 0) {
            return [
                [i - 1, j],
                [i - 1, j + 1],
                [i, j + 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];
        } else if (j === 59) {
            return [
                [i - 1, j],
                [i - 1, j - 1],
                [i, j - 1],
                [i + 1, j],
                [i + 1, j - 1],
            ];
        } else {
            return [
                [i + 1, j],
                [i + 1, j + 1],
                [i + 1, j - 1],
                [i, j + 1],
                [i, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i - 1, j - 1],
            ];
        }
    }
};

export default getNeighbors;