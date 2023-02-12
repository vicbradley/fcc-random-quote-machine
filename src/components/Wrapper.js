// useState,useEffect
import { useEffect, useState } from "react";

// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; 

// Button Bootstrap
import Button from "react-bootstrap/Button";

// Quotes.js
import { quotesArray } from "./Quotes.js";

// ColorGenerator.js
import { generateColor } from "./ColorGenerator.js";

// Tweet.js
import { Tweet } from "./Tweet.js";

// Styling css
import "../css/style.css";



// Function random
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};

function Wrapper() {
    let firstRandomQuote = quotesArray.random()   // quote pertama saat component baru dirender

    // state quote
    const [quote, setQuote] = useState({
        text: firstRandomQuote.quote,
        author: firstRandomQuote.author
    });

    const updateQuote = () => {
        let randomQuote = quotesArray.random();

        setTimeout(() => {
            setQuote(previousState => {
                return {
                    ...previousState,
                    text: randomQuote.quote,
                    author: randomQuote.author
                }
            });
        }, 500);
    }

    // state color
    const [color,setColor] = useState("salmon");
    const click = (color) => {
        let randomColor = generateColor();
        setColor(randomColor);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
        document.body.style.transition = "all 2s ease-out";

        // h2
        document.getElementsByClassName("text-color")[0].style.color = color;
        document.getElementsByClassName("text-color")[0].style.transition = "all 2s ease-out";

        // p
        document.getElementsByClassName("text-color")[1].style.color = color;
        document.getElementsByClassName("text-color")[1].style.transition = "all 2s ease-out";

        // button new quote
        document.getElementsByClassName("text-color")[2].style.backgroundColor = color;
        document.getElementsByClassName("text-color")[2].style.transition = "all 2s ease-out";
        document.getElementsByClassName("text-color")[2].style.color = "white";

        // button tweet
        document.getElementsByClassName("text-color")[3].style.backgroundColor = color;
        document.getElementsByClassName("text-color")[3].style.transition = "all 2s ease-out";
        document.getElementsByClassName("text-color")[3].style.color = "white";

        // gambar tweet
        // document.getElementsByClassName("text-color")[3].style.transition = "all 2s ease-out";

        // gambar instagram
        // document.getElementsByClassName("text-color")[4].style.transition = "all 2s ease-out";

        document.getElementById("text").style.transition = "all 2s ease-out";
    },[color])

    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <div id="quote-box" className="p-3 p-lg-5 text-white rounded ">
                
                
                <h2 id="text" className="text-color text-center" >
                    <FontAwesomeIcon id="quote-icon" icon={faQuoteLeft}  size="lg"/>
                    {quote.text}
                </h2>

                <p id="author" className="text-color d-flex justify-content-end m-3">
                    - {quote.author}
                </p>

        		<div id="button-div">
                    <Button id="new-quote" variant="light" className="text-color float-end" onClick={() => { updateQuote();click("salmon")}}>New quote</Button>


                    <Button id="tweet-quote" variant="light" className="text-color" onClick={() => {click("salmon");Tweet(quote.text,quote.author)}} href="https://www.instagram.com/">Tweet</Button>

                </div>
                
            </div>
        </div>
    );
}

export default Wrapper;
