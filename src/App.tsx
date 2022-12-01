import "./index.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewPage from "./component/ReviewPage";

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
