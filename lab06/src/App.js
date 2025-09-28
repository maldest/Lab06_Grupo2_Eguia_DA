import React, { Component } from "react";
import "./App.css";
import Table from "./Table";

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

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista de personajes</h1>
          {/* 1) Pasamos characters y removeCharacter como props a Table */}
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </header>
      </div>
    );
  }
}

export default App;
