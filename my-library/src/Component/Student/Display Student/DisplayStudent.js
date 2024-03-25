import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setSelectedStudent, setStudent } from '../../../redux/actions/LibraryActions';

export default function DisplayStudent() {

  //const is functions

    const students = useSelector((state) => state.allStudents.students);
    const dispatch = useDispatch();

    const getStudentId = (id)=>{
      console.log(id);
      // const singlestudent = students.filter((student)=>student.id===id)
      const singleStudent = students.find((student)=>student.id===id);
      singleStudent.state="UPDATING";


      dispatch(setSelectedStudent(singleStudent))
      console.log(singleStudent);
    }

    const getRemoveId = (id)=>{
      const singleStudent1 = students.find((student)=>student.id===id);
      singleStudent1.state="REMOVED";

      const oldStudent = [...students];
      const studentIndex = oldStudent.findIndex((student)=>student.id===id)
      console.log(studentIndex);

      oldStudent.splice(studentIndex, 1, singleStudent1);
      dispatch(setStudent(oldStudent));
      console.log(students);
    }

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
            students.map((student)=>{
              return(
                <tr key={student.id}>
                 <td>{student.id}</td>
                 <td>{student.firstname}</td>
                 <td>{student.lastname}</td>
                 <td>
                  <button onClick={()=>getStudentId(student.id)}>Edit</button>
                  &nbsp;
                  <button onClick={()=>getRemoveId(student.id)}>Remove</button>

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
