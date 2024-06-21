import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Background from "./components/Background";
import Simple from "./components/Simple";
import Navbar from "./components/Navbar";

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="display-1 balsamiq-sans-regular">
              Have a lucky (CHARM)!
              <br />
              (CHARM) is an ERC-20 token written in Lisp.
            </p>
          </div>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div id="opa">
        qwe
      </div>
      <Background />
      <Simple />
    </div>
  );
}

export default App;
