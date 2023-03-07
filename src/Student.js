import CreateIcon from '@mui/icons-material/Create';
import { AddNewStudent } from "./addNewStudent";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export function Student() {
  const [data, setData] = useState([]);
  const getStudent = () => {

    fetch("https://63fda26819f41bb9f65017d9.mockapi.io/student", {
      method: "GET",
    }).then((data) => data.json())
      .then((st) => setData(st));
  };

  useEffect(() => getStudent(), []);

  return (
    <div>
      {/* <AddNewStudent data={data} setData={setData} /> */}
      <Sd data={data} getStudent={getStudent} />
    </div>
  );
}
function Sd({ data, getStudent }) {

const navigate=useNavigate()

  const deleteSt = (id) => {
    fetch(`https://63fda26819f41bb9f65017d9.mockapi.io/student/${id}`, {
      method: "DELETE",
    }).then((data) => getStudent());
  };

  return (

    <div className="table">
      <table id="customers">
        <tr>
          <th>RollNumber</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Mentor</th>
          <th>Other</th>
        </tr>

        {data.map((st) => (

          <Tbody
            data={st}
            id={st.id}
            deleteSt={<Button onClick={() => deleteSt(st.id)} variant="contained"><DeleteIcon /></Button>} 
eaditSt={<Button onClick={() =>navigate(`/student/eadit/${st.id}`)} variant="contained"><CreateIcon /></Button>}
       /> 
       )

        )}

      </table>
    </div>
  );
}
function Tbody({ data, deleteSt,eaditSt }) {
  return (

    <tr>



      <td>{data.roll}</td>
      <td>{data.name}</td>
      <td>{data.section}</td>
      <td>{data.stand}</td>
      <td>

        <div className="but">
          <div>

          {eaditSt}
          </div>
          <div>

            {deleteSt}
          </div>

        </div>




      </td>
    </tr>

  );
}


