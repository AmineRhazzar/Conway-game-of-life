import React, { useState } from "react";
import Grid from "./Grid";
import gridObjects from "./ClasssicInitialGrids";

const App = (props) => {
    const [start, setStart] = useState(false);
    const [speed, setSpeed] = useState(80);
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
                            setStart(false);
                            SetInitialGrid([]);
                            SetInitialGrid(pattern);
                        }}
                    >{name}</button>;
                })}
                <input type="number" placeholder="speed in ms" value={speed} onChange={(e)=>{
                    setSpeed(e.target.value);
                }} />
            </div>

            <Grid initialGrid={initialGrid} start={start} speed={speed} />
        </>
    );
};
export default App;
