import React, { useEffect, useState } from "react";
import "./Api.css";

function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json();
      })
      .then((result) => {
        setData(result[1] || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="api-page">
      <h1>Datos de Wikipedia con useEffect</h1>
      {loading && <p>Cargando...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Api;
