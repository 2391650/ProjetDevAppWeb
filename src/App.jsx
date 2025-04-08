import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Group from "./pages/Group";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Group" element={<Group/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
