import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function DisplayStudent() {
    const students = useSelector((state) => state.allStudents.students);
    console.log(students);

  return (
    <>
    <table className="student-table">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </table>
    </>
  )
}
