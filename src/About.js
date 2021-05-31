import React, {useEffect} from "react";

const About = (props) => {
    
    useEffect(() => {
        const clickOutsideHandler = (e) => {
            if (!document.querySelector(".about").contains(e.target)) {
                props.closeMe();
            }
        }
        document.addEventListener("click", clickOutsideHandler);

        return () => {
            document.removeEventListener("click", clickOutsideHandler);
        }
    }, [props])

    return (
        <div className="about">
            <div className="content">
                <h1>Rules</h1>
                <p>There are 3 simple rules as to how this game operates</p>
                <ul>
                    <li>
                        Any live cell with two or three live neighbours
                        survives.
                    </li>
                    <li>
                        Any dead cell with three live neighbours becomes a live
                        cell.
                    </li>
                    <li>
                        All other live cells die in the next generation.
                        Similarly, all other dead cells stay dead.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
