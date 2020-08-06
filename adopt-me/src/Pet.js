// We will have error from ESLint saying we defined but never use React. We do through Babel/JSX but ESlint just does not know that

import React from "react";
/* REACT: This is the basics of react. It is building components that we can put inside of other components and so on. */
// Creating another component (or another Stamp)
// All of our info that is passed to Pet will be sent through the param of props. See how we are accessing props.____ to get the info from our call
/* ---> or we can do destructuring and inside of writing props.____ everytime we write replace the param props with {____,____,_____} ____ being the properties. The we can use those properties as vars in our code*/

// When exporting full file/constuct from another file, format like this
export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);

  /* NOTE ABOUT JSX: we could change the file type to jsx to give us jsx features or we can go to the bottom right corner and change into Javascript React */

  /* Also NOTE: You can only return one thing so everything must be wrapped inside of a single element else error */

  /* This does the same as above. Babel translates what is below into React.createElement() calls*/

  /* Inside the {} we can write expressions. An expression is anything that can go on the right side of a var declaration. const x = ___________. Does not have to only be the params. It can also be name.ToUpper() or animal + breed. Stuff like that */
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
