import React, {useState} from 'react'

export default function AddBook() {
const [ bookname, setBookname] = useState ('');
const [ description, setDescription] = useState ('');

  return (
    <div className="book-form">
      <input type="text" 
                placeholder="Enter book name"
                onChange={(e)=> setBookname (e.target.value)}/>
      <input type="text" 
                placeholder="Enter book description"
                onChange={(e)=> setDescription (e.target.value)}/>
      <button class="add-book">Add</button>
   </div>
  )
}
