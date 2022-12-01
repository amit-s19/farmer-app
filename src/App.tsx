import "./index.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewPage from "./component/ReviewPage";
import Header from "./component/Header";
import Login from "./component/Login";

import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <>
         <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review/:orderId" element={<ReviewPage />} />
        </Routes>
      </div>
      <Toaster />
      </>
    </Router>
  );
}

export default App;
