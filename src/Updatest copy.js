import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

function EaditTeach ({ teacher}) {

  const navigate = useNavigate();

  const { formik, values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      roll:teacher.roll,
      name:teacher.name,
      batch:teacher.batch,
      year:teacher.year,
      subject:teacher.subject
    },

    onSubmit: (updateSt) => {
      console.log("form values", updateSt);
      editTeacher(updateSt);
    }
  });
  const editTeacher = (updateSt) => {

    fetch(`https://6406cbc177c1a905a0e35e39.mockapi.io/teacher/${teacher.id}`, {
      method: "PUT",
      body: JSON.stringify(updateSt),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/teacher"));

  };

  return (
    <form onSubmit={handleSubmit} className="from-text">

      <input
        type="text"
        placeholder="RollNumber"
        onChange={handleChange}
        value={values.roll}
        name="roll"
        onBlur={handleBlur} />
      <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={values.name}
        name='name'
        onBlur={handleBlur} />

      <input
        type="text"
        placeholder="Batch"
        value={values.batch}
        name="section"
        onChange={handleChange}
        onBlur={handleBlur} />

      <input
        type="text"
        name="stand"
        placeholder="MentorName"
        onChange={handleChange}
        value={values.year}
        onBlur={handleBlur} />

          <input
        type="text"
        name="stand"
        placeholder="MentorName"
        onChange={handleChange}
        value={values.subject}
        onBlur={handleBlur} />
      <button

        type="sumbit">Save</button>
    </form>
  );
}
export function UpdateTeach() {

  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
      const getTeacher = () => {

        fetch(`https://6406cbc177c1a905a0e35e39.mockapi.io/teacher/${id}`, {
          method: "GET",
        }).then((teacher) => teacher.json())
          .then((teacher) => setTeacher(teacher));
      };
    
      useEffect(() => getTeacher(), []);
  return (
    <div>{teacher ? <EaditTeach teacher={teacher} /> : "loading..."}</div>
  );
}
