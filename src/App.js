import React, { useState } from "react";
import Grid from "./Grid";
import gridObjects from "./ClasssicInitialGrids";

const App = (props) => {
    const [start, setStart] = useState(false);
    const [initialGrid, SetInitialGrid] = useState([]);
    return (
        <>
            <div className="control-btns">
                <button
                    className={`${start? "stop-btn":"start-btn"}`}
                    onClick={() => {
                        setStart(!start);
                    }}
                >
                    {start ? "STOP" : "START"}
                </button>
                <button
                    className="clear-btn"
                    onClick={() => {
                        setStart(false);
                        SetInitialGrid([]);
                    }}
                >
                    Clear
                </button>
                {Object.entries(gridObjects).map(([name, pattern]) => {
                    return <button key={name}
                        className="pattern"
                        onClick={() => {
                            SetInitialGrid(pattern);
                        }}
                    >{name}</button>;
                })}
            </div>

            <Grid initialGrid={initialGrid} start={start} />
        </>
    );
};
export default App;
