import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setSelectedStudent, setStudent } from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function DisplayStudent() {
    const students = useSelector((state) => state.allStudents.students);
    // console.log(students);
    const dispatch = useDispatch();
    
    const getStudentId =(id) => {
      console.log(id);
      // const singlestudent= students.filter((student)=>student.id===id)
      const singlestudent= students.find((student)=>student.id===id);
      singlestudent.state="UPDATING";
      dispatch(setSelectedStudent(singlestudent));
      console.log(singlestudent);
    }

    const getRemoveStudentId =(id)=>{
      const singlestudent1= students.find((student)=>student.id===id);
      singlestudent1.state="REMOVED";

      http.delete(`students/${singlestudent1.id}/delete`).then((result)=>{
        console.log(result.data);
        dispatch(setStudent(result.data[0]));
      }).catch(error=>{
        console.log(error.message);
      });

      const oldStudent = [...students];
      const studentIndex = oldStudent.findIndex((student =>student.id===id));
      console.log(studentIndex);  
      oldStudent.splice(studentIndex, 1,singlestudent1);
      dispatch(setStudent(oldStudent));
      console.log(students);
      // dispatch(setSelectedStudent(singlestudent));
    }

    const getStudentData=()=>{
      http.get(`students`).then((result)=>{
        console.log(result.data);
        dispatch(setStudent(result.data[0]));
      }).catch(error=>{
        console.log(error.message);
      });
    }
    useEffect(()=>{
      getStudentData();
    },[]);
  return (
    <>
    <table className="student-table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          students.filter((student)=>student.status!=='REMOVED')
          .map((student)=>{
            return(
              <tr key = {student.id}>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>

              <td>
                <button onClick={()=>getStudentId(student.id)} className='edit-button'>Edit</button>
                <button onClick={()=>getRemoveStudentId(student.id)} className='delete-button'>Delete</button>
              </td>
            </tr>
            )
          })

        }

      </tbody>

      </table>
    </>
  )
}