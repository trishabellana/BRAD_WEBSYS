import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {setBook} from '../../../redux/actions/LibraryActions';


export default function AddBook() {
const [ bookname, setBookname] = useState ('');
const [ description, setDescription] = useState ('');
const [ status, setStatus] = useState ('');
const dispatch = useDispatch();
const books = useSelector((state)  => state.allBooks.books); 

const addBook=()=>{
  const newbook={
    id: Math.floor (Math.random()*10000),
    bookname :bookname,
    description :description,
    status :status
  }

  const oldBook = [...books];
  oldBook.push(newbook);
  dispatch(setBook(oldBook));

}

  return (
    <div className="book-form">
      <input type="text" 
                placeholder="Enter book name"
                onChange={(e)=> setBookname (e.target.value)}/>
      <input type="text" 
                placeholder="Enter book description"
                onChange={(e)=> setDescription (e.target.value)}/>
      <input type="text" 
                placeholder="Enter book status"
                onChange={(e)=> setStatus (e.target.value)}/>
      <button onClick={()=>addBook()} className="add-book">Add</button>
   </div>
  )
}
