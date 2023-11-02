import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="search-bar">
                <input
                    className="tabel-search"
                    type="text"
                    placeholder="Search"
                ></input>
            </div>

            <div className="tes12 text-left">tes 12</div>
        </>
    );
}

export default App;
