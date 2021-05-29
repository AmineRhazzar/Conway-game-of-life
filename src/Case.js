import React from 'react';

const Case = (props) => {
    return (
        <div className={`case ${props.alive ? "on":""}`}></div>
    );
}
export default Case;