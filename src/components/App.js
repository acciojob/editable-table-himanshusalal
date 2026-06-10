import React, { useState, useRef } from "react";
import "./../styles/App.css";

const App = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "Rahul", age: 25 },
    { id: 2, name: "Aman", age: 30 },
    { id: 3, name: "Priya", age: 22 },
  ]);

  const editedRowsRef = useRef({});

  const handleChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    editedRowsRef.current[id] = {
      ...editedRowsRef.current[id],
      [field]: value,
    };
  };

  const handleSubmit = () => {
    console.log(editedRowsRef.current);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h2>Editable Table</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
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
                    handleChange(
                      row.id,
                      "age",
                      Number(e.target.value)
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={handleSubmit}>
        Save Changes
      </button>
    </div>
  );
};

export default App;