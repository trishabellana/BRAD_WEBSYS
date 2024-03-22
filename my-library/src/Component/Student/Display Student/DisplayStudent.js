import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function DisplayStudent() {
    const students = useSelector((state) => state.allStudents.students);
    console.log(students);

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
                 <td>Actions</td>
                 </tr>

              )
            })

          }

       
        </tbody>
      </table>
    </>
  )
}
