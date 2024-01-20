// App.js

import React, { useState } from "react";
import Form from "./Component/Form.js";
import Table from "./Component/Table.js";
import './App.css';


const App = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  const handleRowEdit = (index, updatedData) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = updatedData;
    setFormData(updatedFormData);
  };

  const handleRowDelete = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  return (
    <div className="container">
        <Form onSubmit={handleFormSubmit} />

      <Table
        data={formData}
        onEdit={handleRowEdit}
        onDelete={handleRowDelete}
      />
    </div>
  );
};

export default App;
