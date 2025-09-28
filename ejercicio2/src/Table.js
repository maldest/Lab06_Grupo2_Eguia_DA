import React from "react";
import "./Table.css";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
      <th>Acción</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => {
  if (!characterData || characterData.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="3" className="empty-row">
            No hay personajes
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {characterData.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button
              className="btn-delete"
              onClick={() => removeCharacter(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ characterData, removeCharacter }) => (
  <table className="styled-table">
    <TableHeader />
    <TableBody
      characterData={characterData}
      removeCharacter={removeCharacter}
    />
  </table>
);

export default Table;
