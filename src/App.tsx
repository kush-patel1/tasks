import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Kush Patel</h1>
            <p>Hello World!</p>
            <img src={"./p90399199-highres-1600807859.jpg"} alt="m3 comp" />
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
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
        </div>
    );
}

export default App;
