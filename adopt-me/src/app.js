/* REACT: This is the basics of react. It is building components that we can put inside of other components and so on. */



// Creating another component (or another Stamp)

// All of our info that is passed to Pet will be sent through the param of props. See how we are accessing props.____ to get the info from our call

/* ---> or we can do destructuring and inside of writing props.____ everytime we write replace the param props with {____,____,_____} ____ being the properties. The we can use those properties as vars in our code*/
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};


// *********************************************

// We have created the App component
/* Think of this as a stamp. We created a stamp called App. This stamp will be used stamped any time we want. So whenever we call App(), it will stamp a div and inside of that it will stamp an h1 */
/*  NOTE: The CSS is actually having the h1, so its not text its replaced with a logo, the text inside saying "adopt me" therefore is pointless. (Or you can just put them as an Array of upto 15 max children)
 
THis is called variable arity..
*/
const App = () => {
    return React.createElement(
        "div",
        {},
        /*  *************************************************
        UNDERSTANDING: .createElement
         >PARAM1: What kind of element we want to create
         >PARAM2: What attributes we want it to have (id, class, src, etc)
         >PARAM3: What we want inside of it(childen), i.e: "adopt me" or another createElement
         >PARAM PAST THAT: All addtional patterns are also considered children
         *************************************************
        */

        // The info we are passing to Pet() is being given as a Param called Props
        [
            React.createElement("h1", {}, "Adopt Me"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
            React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
            React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
        ]
    );
};

// Here we are using out stamp of App and rendering it inside the div with #root.
/* React.createElement can either take in a stamp(component) that you have created or take in a string of an HTML element can create that("h1" would create an h1) */
/* NOTE IMPORTANT: when we write .render anything inside the element selected will be removed. Hence they "not rendered" is no longer visible */
ReactDOM.render(React.createElement(App), document.getElementById("root"));



