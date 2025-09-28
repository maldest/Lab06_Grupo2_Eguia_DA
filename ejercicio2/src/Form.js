import React, { useState } from "react";
import "./Form.css";

function Form({ handleSubmit }) {
  const [form, setForm] = useState({ name: "", job: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    if (!form.name.trim() || !form.job.trim()) {
      alert("Completa todos los campos");
      return;
    }
    handleSubmit(form);
    setForm({ name: "", job: "" });
  };

  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          placeholder="Ej: Ana"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="job">Trabajo</label>
        <input
          id="job"
          name="job"
          type="text"
          value={form.job}
          placeholder="Ej: Diseñador"
          onChange={onChange}
        />
      </div>

      <div className="form-actions">
        <input
          type="button"
          className="btn-submit"
          value="Agregar"
          onClick={submitForm}
        />
      </div>
    </form>
  );
}

export default Form;
