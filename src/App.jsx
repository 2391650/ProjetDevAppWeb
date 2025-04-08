import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
