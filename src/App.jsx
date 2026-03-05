import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/success" element={<Success />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;