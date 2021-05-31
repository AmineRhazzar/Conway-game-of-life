import React, { useRef, useState } from "react";
import App from "./App";
import About from "./About";
import { ReactComponent as AboutIcon } from "./about.svg";

const Intro = (props) => {
    const intro = useRef(null);
    const [hideIntro, setHideIntro] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handleHideIntro = () => {
        intro.current.classList.add("fading");
        setTimeout(() => {
            setHideIntro(true);
        }, 150);
    };

    const handleHideAbout = () => {
        if (showAbout) {
            document.querySelector(".about").style.opacity = "0";
            setTimeout(() => {
                setShowAbout(false);
            }, 300);
        } else {
            setShowAbout(true);
        }
        
    };

    return (
        <>
            <AboutIcon onClick={handleHideAbout} />
            {showAbout ? <About closeMe={handleHideAbout}/> : <></>}
            {hideIntro ? (
                <App />
            ) : (
                <div className="intro" ref={intro}>
                    <h1>John Conway's Game Of Life</h1>
                    <p>
                        The Game of Life is a cellular automaton devised by the
                        British mathematician John Horton Conway in 1970. It is
                        a zero-player game, meaning that its evolution is
                        determined by its initial state, requiring no further
                        input. One interacts with the Game of Life by creating
                        an initial configuration and observing how it evolves.
                    </p>
                    <a
                        className="read-more"
                        href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    >
                        [Read More Here]
                    </a>
                    <p>
                        Start by creating an initial state yourself (by clicking
                        on the "cells" to turn them on and off) or choosing one
                        of the pre-built ones
                    </p>
                    <p>
                        You can also set the speed of the animation to your
                        likings.
                        <br />A lower value means greater speed.
                    </p>
                    <p>Reset everything by clearing the board</p>
                    <button className="start" onClick={handleHideIntro}>
                        Start
                    </button>
                </div>
            )}
        </>
    );
};

export default Intro;
