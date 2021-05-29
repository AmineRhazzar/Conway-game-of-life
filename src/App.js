import React, { useEffect, useState } from "react";
import Case from "./Case";

const Grid = () => {
    const numRows = 50;
    const numCols = 50;
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    });

  const getNeighbors = (i, j) => {
    
  }
  
  useEffect(() => {
    const nextGen = setInterval(() => {
      var newGrid = grid.map((rows, i) =>
        rows.map((elem, j) => {
        })
      );
    }, 3000);
    return () => { clearInterval(nextGen) };
    }, []);

    return (
        <div className="grid">
            {grid.map((rows, i) =>
                rows.map((elem, j) => <Case key={`${i}-${j}`} alive={elem} />)
            )}
        </div>
    );
};

export default Grid;
