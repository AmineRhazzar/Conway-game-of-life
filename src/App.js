import React, { useState, useRef } from "react";
import Grid from "./Grid";
import gridObjects from "./ClasssicInitialGrids";

const App = (props) => {
    const [start, setStart] = useState(false);
    const [speed, setSpeed] = useState(40);
    const [initialGrid, SetInitialGrid] = useState([]);
    const [showBorders, setShowBorders] = useState(false);
    const showBordersSwitch = useRef(null);


    return (
        <div className="app">
            <div className="control-btns">
                <div className="check-cont" onClick={() => {
                    showBordersSwitch.current.checked = !(showBordersSwitch.current.checked)
                    setShowBorders(showBordersSwitch.current.checked);
                }}>
                    <input
                        type="checkbox"
                        ref={showBordersSwitch}
                        hidden={false}
                    />
                    <div className="check"></div>
                    <p>Show cell borders</p>
                </div>
                <button
                    className={`${start ? "stop-btn" : "start-btn"}`}
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
                    return (
                        <button
                            key={name}
                            className="pattern"
                            onClick={() => {
                                setStart(false);
                                SetInitialGrid([]);
                                SetInitialGrid(pattern.concat());
                            }}
                        >
                            {name}
                        </button>
                    );
                })}
                <input
                    type="number"
                    placeholder="speed in ms"
                    value={speed}
                    onChange={(e) => {
                        setSpeed(e.target.value);
                    }}
                />
            </div>

            <Grid initialGrid={initialGrid} start={start} speed={speed} showBorders={ showBorders}/>
        </div>
    );
};
export default App;
