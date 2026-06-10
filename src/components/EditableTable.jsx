import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [rows, setRows] = useState([
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
  ]);

  const editedRows = useRef([]);

  const handleChange = (rowIndex, colIndex, value) => {
    const updatedRows = rows.map((row) => [...row]);
    updatedRows[rowIndex][colIndex] = value;
    setRows(updatedRows);

    const cellNumber = rowIndex * 2 + colIndex + 1;

    if (!editedRows.current.includes(cellNumber)) {
      editedRows.current.push(cellNumber);
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <input
                    type={colIndex === 0 ? "text" : "number"}
                    value={value}
                    onChange={(e) =>
                      handleChange(rowIndex, colIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditableTable;