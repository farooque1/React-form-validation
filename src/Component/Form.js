import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Form = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contact: "",
            weekdays: daysOfWeek.reduce((acc, day) => ({ ...acc, [day.toLowerCase()]: false }), {}),
            gender: "",
            dob: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            contact: Yup.number()
                .typeError("Contact must be a number")
                .required("Contact is required"),
            gender: Yup.string().required("Gender is required"),
            dob: Yup.date().required("Date of Birth is required"),
        }),
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
        },
    });

    return (
<div className="container d-flex justify-content-center align-items-center" style={{ height: '85vh' }}>
            <form className="border p-3" onSubmit={formik.handleSubmit} style={{ width: '400px' }}>
            <h2>Form</h2>
            <div class="form-group">
                <label>
                    Name:
                    <input type="text" {...formik.getFieldProps("name")} className="form-control" />
                    {formik.touched.name && formik.errors.name && (
                        <div className="error-message">{formik.errors.name}</div>
                    )}
                </label>
            </div>

            <div class="form-group">
                <label>
                    Email:
                    <input type="text" {...formik.getFieldProps("email")} className="form-control" />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{formik.errors.email}</div>
                    )}
                </label>
            </div>
            <div class="form-group">
                <label>
                    Contact:
                    <input type="text" {...formik.getFieldProps("contact")} className="form-control" />
                    {formik.touched.contact && formik.errors.contact && (
                        <div className="error-message">{formik.errors.contact}</div>
                    )}
                </label>
            </div>


            <div className='form-group my-2'>
                {daysOfWeek.map((day) => (
                    <label key={day}>
                        <input  type="checkbox" checked={formik.values.weekdays[day.toLowerCase()]} className="m-1"
                        onChange={() => formik.setFieldValue(`weekdays.${day.toLowerCase()}`, !formik.values.weekdays[day.toLowerCase()])}
                        />
                       {day}
                    </label>
                ))}
            </div>


            <div class="form-group my-2">
                <label>
                    Gender:
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === "Male"}
                            className="form-check-input m-1"
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === "Female"}
                            className="form-check-input m-1"
                        />
                        Female
                    </label>
                    {formik.touched.gender && formik.errors.gender && (
                        <div className="error-message">{formik.errors.gender}</div>
                    )}
                </label>
            </div>

            <div class="form-group">
                <label>
                    Date of Birth:
                    <input type="date" {...formik.getFieldProps("dob")} className="form-control" />
                    {formik.touched.dob && formik.errors.dob && (
                        <div className="error-message">{formik.errors.dob}</div>
                    )}
                </label>
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
        </div>
    );
};

export default Form;
