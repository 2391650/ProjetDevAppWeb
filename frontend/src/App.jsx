import "./App.css";
import Groups from "./pages/Groups.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./pages/GroupPage.jsx";
import Login from "./pages/Login.jsx";
import Sign from "./pages/SignUp.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/groups" element={<Groups/>}/>
      <Route path="/group/:id" element={<GroupPage/>}/>
      <Route path="/signUp" element={<Sign/>}/>
      <Route path="/eleve/:ideleve" element={<StudentPage />} />

    </Routes>
  </BrowserRouter>;
}

export default App;
