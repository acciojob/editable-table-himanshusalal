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