import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [rows, setRows] = useState([
    { name: "1", age: "2" },
    { name: "3", age: "4" },
    { name: "5", age: "6" },
  ]);

  const editedRows = useRef([]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];

    updated[index][field] = value;
    setRows(updated);

    if (!editedRows.current.includes(index + 1)) {
      editedRows.current.push(index + 1);
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
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.age}
                  onChange={(e) =>
                    handleChange(index, "age", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditableTable;