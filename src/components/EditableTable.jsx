import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "Shyam", age: 25 },
    { id: 2, name: "Ali", age: 30 },
    { id: 3, name: "Shaw", age: 35 },
    { id: 4, name: "Shaw", age: 20 },
    { id: 5, name: "Tavneet", age: 50 },
    { id: 6, name: "Lakshmi", age: 40 },
  ]);

  const editedRows = useRef([]);

  const handleChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    if (!editedRows.current.includes(id)) {
      editedRows.current.push(id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited rows:", editedRows.current);
  };

  return (
    <div>
      <h1>Track edited cells to log updates for future</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>

                <td>
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) =>
                      handleChange(row.id, "name", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={row.age}
                    onChange={(e) =>
                      handleChange(row.id, "age", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default EditableTable;