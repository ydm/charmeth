import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark text-white">
      <Jumbotron />
      <br />
      <br />
      <Main />
      <br />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
