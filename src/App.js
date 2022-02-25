import "./App.css";
import Navbar from "./Mypages/navbar";
import Home from "./Mypages/home";
import Mybooks from "./Mypages/mybooks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/mybooks" element={<Mybooks />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
