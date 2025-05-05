import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./pages/GroupPage.jsx";
import Login from "./pages/Login.jsx";
import Sign from "./pages/SignUp.jsx";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/group/:id" element={<GroupPage/>}/>
      <Route path="/signUp" element={<Sign/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
