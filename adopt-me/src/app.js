import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    // Strictmode will throw errors if we use anything that is/is soon to be deprecated from React. Helps future proof code
    <React.StrictMode>
      <div>
        <header>
          {/* Link allows us to adopt on the logo and go to home page */}
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        ;
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
