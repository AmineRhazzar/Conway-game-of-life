import React from "react";

const Case = (props) => {
    const setCellState = () => {
        props.setCell(props.indexRow, props.indexCol);
    };
    return (
        <div
            className={`case ${props.alive ? "on" : ""} ${props.showBorders? "border":""}`}
            onClick={setCellState}
        ></div>
    );
};
export default Case;
