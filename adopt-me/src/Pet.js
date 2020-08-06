import React from "react";
/* REACT: This is the basics of react. It is building components that we can put inside of other components and so on. */
// Creating another component (or another Stamp)
// All of our info that is passed to Pet will be sent through the param of props. See how we are accessing props.____ to get the info from our call
/* ---> or we can do destructuring and inside of writing props.____ everytime we write replace the param props with {____,____,_____} ____ being the properties. The we can use those properties as vars in our code*/

// When exporting full file/constuct from another file, format like this
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
