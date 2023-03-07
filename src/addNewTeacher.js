import { useState} from "react";
import { useNavigate } from "react-router-dom";
export function AddNewTeacher() {

  const navigate=useNavigate()
 const [roll,setRoll]=useState("")
  const[name,setName]=useState("")
  const[batch,setBatch]=useState("")
  const[year,setYear]=useState("")
  const[subject,setSubject]=useState("")

  const addTeacher=()=>{
    const newData={
      roll:roll,
     name:name,
     batch:batch,
     year:year,
     subject:subject
    }
    // setTeacher([...teacher,newData])
 
           fetch("https://6406cbc177c1a905a0e35e39.mockapi.io/teacher", {
         method: "POST",
         body:JSON.stringify(newData),
         headers: { "Content-type": "application/json" },
       }).then(()=>navigate("/teacher"))
     }

  return (
    <div className="from-text">

<input
       type="text"
        placeholder="RollNumber" 
        onChange={(event)=>setRoll(event.target.value)} 
         />
      <input
       type="text"
        placeholder="Name" 
        onChange={(event)=>setName(event.target.value)} 
         />
        
      <input 
      type="text" 
      placeholder="Batch" 
      onChange={(event)=>setBatch(event.target.value)}  
       />
      <input
       type="text"
       
         placeholder="WorkingYear" 
         onChange={(event)=>setYear(event.target.value)} 
          />

<input
       type="text"
       
         placeholder="YourSubject" 
         onChange={(event)=>setSubject(event.target.value)} 
          />
      <button
      onClick={()=>{
        addTeacher()
      }}
 type="sumbit" >Add New User</button>
    </div>
  );
}
