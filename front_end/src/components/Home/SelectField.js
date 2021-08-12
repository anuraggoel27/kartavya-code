import React from "react";
import { useField, ErrorMessage } from "formik";
const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="">
      <label htmlFor={field.name}>{label}</label>
      <select  className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props} name="courses">
        <option>Choose...</option>
        <option>Class 9th (Foundation)</option>
        <option>Class 10th (Foundation)</option>
        <option>Class 11th (Boards)</option>
        <option>Class 12th (Boards)</option>
        <option>Class 11th (Mains/NEET)</option>
        <option>Class 12th (Mains/NEET)</option>
      </select>
      <ErrorMessage component="div" className="error" name={field.name}/>
    </div>
  );
};

export default SelectField;
