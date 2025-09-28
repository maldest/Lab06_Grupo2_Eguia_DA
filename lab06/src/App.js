import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      { name: "Pepe", job: "Doctor" },
      { name: "Mario", job: "Abogado" },
      { name: "Denisee", job: "Actriz" },
      { name: "Pedro", job: "Ingeniero de Sistemas" },
    ],
  };

  removeCharacter = (index) => {
    this.setState((prevState) => ({
      characters: prevState.characters.filter((_, i) => i !== index),
    }));
  };

  handleSubmit = (character) => {
    this.setState((prevState) => ({
      characters: [...prevState.characters, character],
    }));
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista de personajes</h1>
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <h2>Agregar nuevo personaje</h2>
          <Form handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
