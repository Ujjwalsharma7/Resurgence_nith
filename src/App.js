import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/team" element={<OurTeam />}></Route>
                <Route exact path="/events" element={<Events />}></Route>
            </Routes>
        </div>
    );
}

export default App;
