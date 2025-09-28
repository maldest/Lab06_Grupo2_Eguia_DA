import React, { Component } from "react";

// 2) TableHeader
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Trabajo</th>
        <th>Acción</th>
      </tr>
    </thead>
  );
};

// 3) TableBody con el botón Delete
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// 1) Table que recibe characterData y removeCharacter desde App
class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <table border="1" cellPadding="6">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
