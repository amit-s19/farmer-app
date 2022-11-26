import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewPage from "./Component/ReviewPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:orderId" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
