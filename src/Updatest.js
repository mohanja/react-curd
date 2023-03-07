import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

function EaditSt({ data }) {

  const navigate = useNavigate();

  const { formik, values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      roll: data.roll,
      name: data.name,
      section: data.section,
      stand: data.stand
    },

    onSubmit: (updateSt) => {
      console.log("form values", updateSt);
      editStudent(updateSt);
    }
  });
  const editStudent = (updateSt) => {

    fetch(`https://63fda26819f41bb9f65017d9.mockapi.io/student/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updateSt),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/student"));

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
        value={values.section}
        name="section"
        onChange={handleChange}
        onBlur={handleBlur} />

      <input
        type="text"
        name="stand"
        placeholder="MentorName"
        onChange={handleChange}
        value={values.stand}
        onBlur={handleBlur} />
      <button

        type="sumbit">Save</button>
    </form>
  );
}
export function Updatest() {

  const { id } = useParams();
  const [data, setData] = useState(null);
  const getStudent = () => {

    fetch(`https://63fda26819f41bb9f65017d9.mockapi.io/student/${id}`, {
      method: "GET",
    }).then((data) => data.json())
      .then((st) => setData(st));
  };

  useEffect(() => getStudent(), []);
  return (
    <div>{data ? <EaditSt data={data} /> : "loading..."}</div>
  );
}
