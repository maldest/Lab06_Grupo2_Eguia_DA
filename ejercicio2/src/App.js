import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Api from "./Api";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([
    { name: "Pepe", job: "Doctor" },
    { name: "Mario", job: "Abogado" },
    { name: "Denisee", job: "Actriz" },
    { name: "Pedro", job: "Ingeniero de Sistemas" },
  ]);

  // eliminar personaje
  const removeCharacter = (index) => {
    setCharacters((prev) => prev.filter((_, i) => i !== index));
  };

  // agregar personaje
  const handleSubmit = (character) => {
    setCharacters((prev) => [...prev, character]);
  };

  return (
    <div className="app-root">
      <nav className="top-nav">
        <h2 className="brand">Prácticas React - Lab (Hooks)</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api">API</Link>
        </div>
      </nav>

      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                characters={characters}
                removeCharacter={removeCharacter}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<Api />} />
          <Route
            path="*"
            element={
              <div>
                <h3>Página no encontrada</h3>
                <p>
                  Vuelve a <Link to="/">Home</Link>.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      <footer className="app-footer">
        <small>Trabajo práctico — Versión Hooks</small>
      </footer>
    </div>
  );
}

export default App;
