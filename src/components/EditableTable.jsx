import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ]);

  const editedRows = useRef([]);

  const handleChange = (rowId, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      )
    );

    if (!editedRows.current.includes(rowId)) {
      editedRows.current.push(rowId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited rows:", editedRows.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
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
                    handleChange(row.id, "age", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Save</button>
    </form>
  );
};

export default EditableTable;