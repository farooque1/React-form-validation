import React, { useState, useEffect } from "react";

const EditModal = ({ show, initialValues, onEdit, onCancel }) => {
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [contact, setContact] = useState(initialValues.contact);
  const [weekdays, setWeekdays] = useState(initialValues.weekdays);
  const [gender, setGender] = useState(initialValues.gender);
  const [dob, setDob] = useState(initialValues.dob);

  useEffect(() => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setContact(initialValues.contact);
    setWeekdays(initialValues.weekdays);
    setGender(initialValues.gender);
    setDob(initialValues.dob);
  }, [initialValues]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = { name, email, contact, weekdays, gender, dob };
    onEdit(updatedData);
  };

  const handleWeekdayChange = (day) => {
    setWeekdays((prevWeekdays) => ({
      ...prevWeekdays,
      [day]: !prevWeekdays[day],
    }));
  };

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document" style={{ width: '400px' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Row</h5>
            <button type="button" className="close" onClick={onCancel} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Contact:
                  <input
                    type="number"
                    value={contact}
                    className="form-control"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Weekdays:
                  <div className="form-check">
                    {Object.entries(weekdays).map(([day, checked]) => (
                      <div key={day} className="form-check-inline">
                        <input
                          type="checkbox"
                          id={`weekday-${day}`}
                          checked={checked}
                          onChange={() => handleWeekdayChange(day)}
                          className="form-check-input"
                        />
                        <label htmlFor={`weekday-${day}`} className="form-check-label">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Gender:
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={() => setGender("Male")}
                      checked={gender === "Male"}
                      className="form-check-input"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={() => setGender("Female")}
                      checked={gender === "Female"}
                      className="form-check-input"
                    />
                    Female
                  </label>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Date of Birth:
                  <input
                    type="date"
                    value={dob}
                    className="form-control"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </label>
              </div>
              <div className="button-container my-3">
                <button type="submit" className="btn btn-success m-2">
                  Save
                </button>
                <button type="button" className="btn btn-danger" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
