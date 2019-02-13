import "./Game.css";
import React, { Component } from "react";
    //import Header from "../Header";
import ClickItem from "../ClickItem";
    //import Container from "../Container";
    //import Footer from "../Footer";
    //import Jumbotron from "../Jumbotron";

import pngA1 from "./images/A1.jpg";
import pngA2 from "./images/A2.jpg"
import pngA3 from "./images/A3.png"
import pngA4 from "./images/A4.png"
import pngB1 from "./images/B1.png"
import pngB2 from "./images/B2.png"
import pngB3 from "./images/B3.png"
import pngB4 from "./images/B4.png"
import pngC1 from "./images/C1.png"
import pngC2 from "./images/C2.png"
import pngC3 from "./images/C3.png"
import pngC4 from "./images/C4.png"

const itemDetails = [
        {
            id:1,
            src: pngA1,
        },
        {
            id:2,
            src: pngA2,
        },
        {
            id:3,
            src: pngA3,
        },
        {
            id:4,         
            src: pngA4,
        },
        {
            id:5,
            src: pngB1,
        },
        {
            id:6,
            src: pngB2,
        },
        {
            id:7,
            src: pngB3,
        },
        {
            id:8,
            src: pngB4,
        },
        {
            id:9,
            src: pngC1,
        },
        {
            id:10,
            src: pngC2,
        },
        {
            id:11,
            src: pngC3,
        },
        {
            id:12,
            src: pngC4
        }


  ]

class Game extends Component {
    state= {ClickItemDetails:itemDetails}
   
    handleClick = (id) => {
        
        this.props.updateGuessedId(id);
        this.props.handleCorrectGuesses(id);
        this.shuffleArray();
    };
    

    renderClickItems = () => {
        return (
            this.state.ClickItemDetails.map((item, index) => <ClickItem src={item.src} key={index} id={item.id} onClick={(id) => this.handleClick(id)}/>)
        )
      }

        shuffleArray= () => {
        const details= this.state.ClickItemDetails;
        let i = details.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = details[i];
          details[i] = details[j];
          details[j] = temp;
        }
        this.setState({ClickItemDetails: details});
      }
      
    render(){
       
        return (
            <main>
                {this.renderClickItems()}
               
             
            </main>
        )
       
    }
}

export default Game;