import React, { useState } from "react";
import "./Form.css"; // Importamos el archivo CSS

function Form({ handleSubmit }) {
  const [form, setForm] = useState({ name: "", job: "" });

  function submitForm(e) {
    e.preventDefault();
    if (form.name && form.job) {
      handleSubmit(form);
      setForm({ name: "", job: "" });
    }
  }

  return (
    <form className="form-container" onSubmit={submitForm}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Ingrese un nombre"
        />
      </div>
      <div className="form-group">
        <label>Trabajo:</label>
        <input
          type="text"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
          placeholder="Ingrese un trabajo"
        />
      </div>
      <button type="submit" className="btn-submit">Agregar</button>
    </form>
  );
}

export default Form;
