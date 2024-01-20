
import React, { useState } from "react";
import EditModal from "./EditModal";

const Table = ({ data, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    onDelete(index);
  };

  return (
    <div className="container">
      <h2>Table</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr className="table-dark">
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Weekdays</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.contact}</td>
              <td>{row.email}</td>
              <td>{renderWeekdays(row.weekdays)}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
              <td>
                <button
                  onClick={() => handleEditClick(index)}
                  type="button"
                  className="btn btn-success m-1"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <EditModal
          show={isEditing}
          initialValues={data[editIndex]}
          onEdit={(updatedData) => {
            onEdit(editIndex, updatedData);
            setIsEditing(false);
            setEditIndex(null);
          }}
          onCancel={() => {
            setIsEditing(false);
            setEditIndex(null);
          }}
        />
      )}
    </div>
  );
};

const renderWeekdays = (weekdays) => {
  const selectedWeekdays = Object.keys(weekdays).filter(
    (day) => weekdays[day]
  );
  return selectedWeekdays.join(", ");
};

export default Table;
