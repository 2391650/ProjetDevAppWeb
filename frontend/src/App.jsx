import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./pages/GroupPage.jsx";
import ElevePage from "./pages/ElevePage.jsx";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/group/:id" element={<ElevePage/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
