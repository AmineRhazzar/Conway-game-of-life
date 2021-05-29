const getNeighbors = (i, j) => {
    
    return [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]];
}