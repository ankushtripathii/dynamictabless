import React, { useState } from "react";
// import '../css/dynamictable'

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({ name: "", location: "", cgpa: "" });

  const handleAddRow = () => {
    setData([...data, newRow]);
    setNewRow({ name: "", location: "", cgpa: "" });
  };

  const handleDeleteRow = (index) => {
    const deletedData = [...data];
    deletedData.splice(index, 1);
    setData(deletedData);
  };

  const handleUpdateRow = (index, updatedRow) => {
    const updatedData = [...data];
    updatedData[index] = updatedRow;
    setData(updatedData);
  };

  return (
    <div className="dynamic-table">
      <table>
        <thead>
          <tr>
            <th>Row num</th>
            <th>Name</th>
            <th>Location</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.location}</td>
              <td>{row.cgpa}</td>
              <td>
                <button
                  onClick={() =>
                    handleUpdateRow(index, {
                      name: `${row.name}`,
                      location: `${row.location}`,
                      cgpa: `${row.cgpa}`
                    })
                  }
                  className="update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteRow(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-row">
        <input
          type="text"
          placeholder="Name"
          value={newRow.name}
          onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newRow.location}
          onChange={(e) => setNewRow({ ...newRow, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="CGPA"
          value={newRow.cgpa}
          onChange={(e) => setNewRow({ ...newRow, cgpa: e.target.value })}
        />
        <button onClick={handleAddRow} className="add-button">
          Add New
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;
