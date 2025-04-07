import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
