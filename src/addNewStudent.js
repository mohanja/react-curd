import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AddNewStudent() {

const navigate=useNavigate()
 const [roll,setRoll]=useState("")
  const[name,setName]=useState("")
  const[section,setSection]=useState("")
  const[stand,setStand]=useState("")

  const addStudent=()=>{
 const newData={
          roll:roll,
         name:name,
          section:section,
          stand:stand
        }
        // setData([...data,newData])
        fetch("https://63fda26819f41bb9f65017d9.mockapi.io/student", {
      method: "POST",
      body:JSON.stringify(newData),
      headers: { "Content-type": "application/json" },
    }).then(()=>navigate("/student"))
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
      onChange={(event)=>setSection(event.target.value)}  
       />
      <input
       type="text"
       
         placeholder="MentorName" 
         onChange={(event)=>setStand(event.target.value)} 
          />
      <button
      onClick={()=>{addStudent()}}
 type="sumbit" >Add New User</button>
    </div>
  );
}
