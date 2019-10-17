import React from "react";
import logo from "./logo.svg";
import "./App.css";
import test from "./test.json";
import TestIndex from "./components/test_index";

function App() {
  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestIndex
          allPasses={test.passes}
          allFailures={test.failures}
          stats={test.stats}
        />
        <p>
          Use the json coming from "test" (imported at the top) to create a
          simple reporter displaying passing tests, failing tests, and any
          related information using simple, reusable components. Contact
          julia@cheddar.com if you have any questions.
        </p>
      </header>
    </div>
  );
}

export default App;
