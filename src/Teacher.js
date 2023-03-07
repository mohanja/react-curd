import CreateIcon from '@mui/icons-material/Create';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export function Teacher() {
  const [teacher, setTeacher] = useState([]);
 
 
   

      const getTeacher = () => {

        fetch("https://6406cbc177c1a905a0e35e39.mockapi.io/teacher", {
          method: "GET",
        }).then((teacher) => teacher.json())
          .then((teacher) => setTeacher(teacher));
      };
    
      useEffect(() => getTeacher(), []);

  return (
    <div>
<TeachData teacher={teacher} getTeacher={getTeacher}/>
    
    </div>
  );
}

function TeachData({teacher,getTeacher}){

  const navigate=useNavigate()

  const deleteSt = (id) => {
    fetch(`https://6406cbc177c1a905a0e35e39.mockapi.io/teacher/${id}`, {
      method: "DELETE",
    }).then((data) => getTeacher());
  };

  return(
    <div>
    <div className="table">
      <table id="customers">
        <tr>
          <th>RollNumber</th>
          <th>MentorName</th>
          <th>Batch</th>
          <th>Subject</th>
          <th>YearWorking</th>
          <th>Other</th>
        </tr>
{teacher.map((teach)=><RowBodya 
teacher={teach}
deleteSt={<Button onClick={() => deleteSt(teach.id)} variant="contained"><DeleteIcon /></Button>} 
eaditSt={<Button onClick={() =>navigate(`/teacher/eadit/${teach.id}`)} variant="contained"><CreateIcon /></Button>}
/>)}


      </table>
    </div>
    </div>
  )
}

function RowBodya({teacher,deleteSt,eaditSt}){
  return(
    <tr>
      <td>{teacher.roll}</td>
      <td>{teacher.name}</td>
      <td>{teacher.batch}</td>
      <td>{teacher.subject}</td>
      <td>{teacher.year}</td>
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
  )
}