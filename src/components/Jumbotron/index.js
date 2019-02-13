import React from "react";
import "./style.css";
import CoverImage from "./image.jpg";
const Jumbotron = () => (
    <div id="background" style= {{backgroundImage:`url(${ CoverImage })`}}>
        <div className="jumbotron">
            <h1>Clicky Game</h1>
            <h2>Click on an image and earn points, but don't click on any image more than once!</h2>
        </div>
    </div> //background
)

export default Jumbotron;

