import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // login or register

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const switchToLogin = () => setAuthMode("login");
  const switchToRegister = () => setAuthMode("register");

  return (
    <Router>
      <div className="App">
        {!user ? (
          authMode === "login" ? (
            <Login onLogin={handleLogin} switchToRegister={switchToRegister} />
          ) : (
            <Register onRegister={handleRegister} switchToLogin={switchToLogin} />
          )
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
