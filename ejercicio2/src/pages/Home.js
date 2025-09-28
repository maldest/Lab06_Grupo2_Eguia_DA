import React from "react";
import Table from "../Table";
import Form from "../Form";
import "./pages.css";

const Home = ({ characters, removeCharacter, handleSubmit }) => {
  return (
    <div className="page">
      <h1>Gestión de Personajes (Hooks)</h1>
      <p className="intro">Ejemplo con useState + props + formularios.</p>

      <section className="content-row">
        <div className="table-wrapper">
          <Table characterData={characters} removeCharacter={removeCharacter} />
        </div>

        <div className="form-wrapper">
          <h2>Agregar nuevo personaje</h2>
          <Form handleSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default Home;
