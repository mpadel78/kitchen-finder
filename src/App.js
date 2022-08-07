import Inventory from "./components/Inventory.js";
import Location from "./components/Location.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inventory />}></Route>
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
      <p>Built by Manish with 💚</p>
    </div>
  );
}

export default App;
