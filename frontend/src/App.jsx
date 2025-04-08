import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupPage from "./pages/GroupPage.jsx";
import CreateGroup from "./pages/CreateGroup.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateGroup />} />
                <Route path="/group/:id" element={<GroupPage />} />
            </Routes>
        </Router>
    );
}

export default App;