import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {setStudent} from '../../../redux/actions/LibraryActions';

export default function AddStudent() {
const [ firstname, setFirstname] = useState ('');
const [ lastname, setLastname] = useState ('');
const dispatch = useDispatch();
const students = useSelector((state)  => state.allStudents.students); 

const addStudent=()=>{
  const newstudent={
    id: Math.floor (Math.random()*10000),
    firstname :firstname,
    lastname :lastname
  }

  const oldStudent = [...students];
  oldStudent.push(newstudent);
  dispatch(setStudent(oldStudent));

}

  return (
    <>
    <div className="student-form">
      <input type="text" 
                placeholder="Enter first name"
                onChange={(e)=> setFirstname (e.target.value)}/>
      <input type="text" 
                placeholder="Enter last name"
                onChange={(e)=> setLastname (e.target.value)}/>
      <button onClick={()=>addStudent()} className="add-student">Add</button>
   </div>
   </>
  )
}
