import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const planetsInHTML = planets.map(singlePlanet => {
    return <li>{singlePlanet}</li>;
});

// 2) add the array planetsInHTML inside the innerHTML of this ul

ReactDOM.render(<ul>{planetsInHTML}</ul>, document.querySelector("#myDiv"));
