import React, { useEffect, useState } from "react";
import Case from "./Case";
import getNeighbors from "./util";

const Grid = () => {
    const numRows = 30;
    const numCols = 50;

    const [start, setStart] = useState(false);
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    });

    const setCell = (aliveI, aliveJ) => {
        var newGrid = grid.map((rows, i) =>
            rows.map((elem, j) => {
                if (i === aliveI && j === aliveJ) {
                    if (grid[i][j] === 0) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else {
                    return grid[i][j];
                }
            })
        );
        setGrid(newGrid);
    };

    useEffect(() => {
        if (start) {
            const nextGen = setInterval(() => {
                var newGrid = grid.map((rows, i) =>
                    rows.map((elem, j) => {
                        const neighbors = getNeighbors(i, j);
                        var NeighboringLiveCells = 0;
                        neighbors.forEach(([neighborI, neighborJ]) => {
                            if (grid[neighborI][neighborJ] === 1) {
                                NeighboringLiveCells++;
                            }
                        });
                        if (elem === 0) {
                            if (NeighboringLiveCells === 3) {
                                return 1;
                            } else {
                                return 0;
                            }
                        } else {
                            if (
                                NeighboringLiveCells !== 2 &&
                                NeighboringLiveCells !== 3
                            ) {
                                return 0;
                            } else {
                                return 1;
                            }
                        }
                    })
                );
                var reachedStillState = true;
                for (let i = 0; i < numRows; i++){
                    for (let j = 0; j < numCols; j++){
                        if (grid[i][j] !== newGrid[i][j]) {
                            reachedStillState = false;
                            break;
                        }
                    }
                    if (!reachedStillState) {
                        break;
                    }
                }
                if (!reachedStillState) {
                    setGrid(newGrid);
                } else {
                    clearInterval(nextGen);
                    console.log("finished!");
                }
            }, 200);

            return () => {
                clearInterval(nextGen);
            };
        }
    }, [grid, start]);

    return (
        <>
            <div className="grid">
                {grid.map((rows, i) =>
                    rows.map((elem, j) => (
                        <Case
                            key={`${i}-${j}`}
                            indexRow={i}
                            indexCol={j}
                            alive={elem}
                            setCell={setCell}
                        />
                    ))
                )}
            </div>
            <button
                onClick={() => {
                    setStart(!start);
                }}
            >
                {start ? "STOP" : "START"}
            </button>
        </>
    );
};

export default Grid;
