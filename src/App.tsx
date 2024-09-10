import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

import sponge from "/Users/kushpatel/Downloads/tasks/src/image1.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | Kush Patel
            </header>
            <h1>Computer Science Fields</h1>
            <img src={sponge} alt="A brain map of Computer Science" />
            <p>Rankings are based on median salary. Highest to Lowest.</p>
            <p>
                source:
                https://graduate.northeastern.edu/resources/top-paying-computer-science-jobs/
            </p>
            <ol>
                <li>Software architect</li>
                <li>Security engineer</li>
                <li>Software developer</li>
                <li>Computer scientist</li>
                <li>Software development engineer</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div
                style={{
                    width: "1512px",
                    height: "50px",
                    backgroundColor: "red",
                }}
            ></div>
        </div>
    );
}

export default App;
