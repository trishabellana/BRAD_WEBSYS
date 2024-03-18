import React, {useState} from 'react'

export default function AddStudent() {
const [ firstname, setFirstname] = useState ('');
const [ lastname, setLastname] = useState ('');

  return (
    <div className="student-form">
      <input type="text" 
                placeholder="Enter first name"
                onChange={(e)=> setFirstname (e.target.value)}/>
      <input type="text" 
                placeholder="Enter last name"
                onChange={(e)=> setLastname (e.target.value)}/>
      <button class="add-student">Add</button>
   </div>
  )
}
