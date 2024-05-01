import React, {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setSelectedStudent, setStudent } from '../../../redux/actions/LibraryActions';
import http from '../../../http';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddStudent() {
const [ firstname, setFirstname] = useState ('');
const [ lastname, setLastname] = useState ('');
const [loading,setLoading] = useState(false);
const dispatch = useDispatch();
const students = useSelector((state)=> state.allStudents.students);
const onestudent = useSelector((state)=> state.singleStudent);

const addStudent=()=>{
  const newstudent={
    firstname: firstname,
    lastname:lastname,
    status: 'ACTIVE'
  }
  // database connection

  http.post(`students`, newstudent).then((result)=>{
    console.log(result.data);

    if(result.data==="1"){
      console.log("Student successfully created");
      setLoading(false);
      notificationMessage('SUCCESS','Student successfully created');
    }else{
      console.log("Student information already exist");
      notificationMessage('ERROR','Student information already exist');
      setLoading(false);
    }


    const notificationMessage=(result,message)=>{
      if(result =="SUCCESS"){
      toast.sucess(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }else if(result == "ERROR"){
      toast.danger(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  }

    // getStudentData();
  }).catch(error=>{
    console.log(error.message);
  });

  const oldStudent = [...students];
  oldStudent.push(newstudent);
  dispatch(setStudent(oldStudent));

}

const getStudentData=()=>{
  http.get(`students`).then((result)=>{
    console.log(result.data);
    dispatch(setStudent(result.data[0]));
  }).catch(error=>{
    console.log(error.message);
  });
}



const updateStudent=()=>{
  const newstudent={
    id:onestudent.id,
    firstname: firstname,
    lastname:lastname,
    status: 'ACTIVE'
  }
  
  const newstudent2={
    firstname: firstname,
    lastname:lastname,
    status: 'ACTIVE'
  }

  http.put(`students/${onestudent.id}/edit`, newstudent2).then((result)=>{
    console.log(result.data);
    // dispatch(setStudent(result.data[0]));
  }).catch(error=>{
    console.log(error.message);
  });

  // const oldStudent = [...students];
  // const studentIndex = oldStudent.findIndex((student =>student.id===onestudent.id));
  // console.log(studentIndex);
  // oldStudent.splice(studentIndex, 1,newstudent);
  // dispatch(setStudent(oldStudent));

  getStudentData();
  onestudent.firstname='';
  onestudent.lastname='';
  onestudent.state='ACTIVE';
  dispatch(setSelectedStudent(onestudent));

  setFirstname('');
  setLastname('');

}

useEffect(()=>{
  if(onestudent.firstname===''){

  }else{
    setFirstname(onestudent.firstname);
    setLastname(onestudent.lastname);

  }
},[onestudent])
  return (
    <div className="student-form">
      <input type="text"
                value={firstname}
                placeholder="Enter first name"
                onChange={(e)=> setFirstname (e.target.value)}/>
      <input type="text" 
                value={lastname}
                placeholder="Enter last name"
                onChange={(e)=> setLastname (e.target.value)}/>
      
      {
        onestudent.state==='UPDATING' ?
          <button onClick={()=>updateStudent()} className="update-student">UPDATE</button>
        :
        loading?
        <button disabled className="add-student">Loading ...</button>
        :
          <button onClick={()=>addStudent()} className="add-student">Add</button>
      
        }
      
   </div>
  )
}