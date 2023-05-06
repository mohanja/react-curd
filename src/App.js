
import { Route, Routes ,Link } from "react-router-dom";
import './App.css'
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { AddNewStudent } from "./addNewStudent";
import { AddNewTeacher } from "./addNewTeacher";
import { Updatest } from "./Updatest";
import{UpdateTeach}from "./Updatest copy";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DashBord } from "./dashbord";
import { Dash } from "./dash";

export function App() {
  const navigate=useNavigate();

  return (
      
    <div className="App">
      
    
      <AppBar position="static">
      <Toolbar>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           DASHBORD
          </Typography>
          <Button color="inherit"  onClick={()=>navigate("/")}>
          Dashbord
            </Button>
            <Button color="inherit"  onClick={()=>navigate("/student")}>
            student
            </Button>
            <Button color="inherit"  onClick={()=>navigate("/teacher")}>
            teacher
            </Button>
              <Button color="inherit"  onClick={()=>navigate("/addstudent")}>
           AddStudent
            </Button>
            <Button color="inherit"  onClick={()=>navigate("/addteacher")}>
           AddTeacher
            </Button>
            {/* <ul className="App-header">
              <li>
                <Link to="/">add</Link>
              </li>
              <li>
                <Link to="/student">student</Link>
              </li>
              <li>
                <Link to="/teacher">teacher</Link>
              </li>
  
              <li>
                <Link to="/addteacher">Contact Us</Link>
              </li>
            </ul> */}
            </Toolbar>
            </AppBar>
           <Routes>
           <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/addstudent' element={<AddNewStudent />}></Route>
                 <Route exact path='/student' element={<Student/>}></Route>
                 <Route exact path='/student/eadit/:id' element={<Updatest/>}></Route>
                 <Route exact path='/teacher/eadit/:id' element={<UpdateTeach/>}></Route>
                 <Route exact path='/addteacher' element={<AddNewTeacher/>}></Route>
                 <Route exact path='/teacher' element={<Teacher/>}></Route>
          </Routes>
         
      
    </div>
    
  );
}

function Home(){
  return(
   <div className="theri">
    <div className="teac">
    <Dash/>
    </div>
 <div className="sudt"> 
  
<DashBord/>
 </div>
 </div>
  )
}
export default App;



