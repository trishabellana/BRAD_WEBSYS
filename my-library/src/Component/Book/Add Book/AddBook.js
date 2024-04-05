import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {setBook,setSelectedBook} from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function AddBook() {
const [ bookname, setBookname] = useState ('');
const [ description, setDescription] = useState ('');
const dispatch = useDispatch();
const books = useSelector((state)  => state.allBooks.books); 
const onebook = useSelector((state)  => state.singleBook);

console.log(onebook);

const addBook=()=>{
  const newbook={
    bookname :bookname,
    description :description,
    status: 'AVAILABLE'
  }

   //Database connection
   http.post('books', newbook).then((result)=>{
    console.log(result.data);
   }).catch(error=>{
     console.log(error.message);
   });
 

  const oldBook = [...books];
  oldBook.push(newbook);
  dispatch(setBook(oldBook));

  setBookname(''); //to clear inputs inside textbox when updating
  setDescription('');  //to clear inputs inside textbox when updating
}

const updateBook=()=>{
  const newbook={
    id:onebook.id,
    bookname :bookname,
    description :description,
    status: 'AVAILABLE'
  }

  const newbook2={
    bookname :bookname,
    description :description,
    status: 'AVAILABLE'
  }


  http.put(`books/${onebook.id}`, newbook2).then((result)=>{
    console.log(result.data);
   }).catch(error=>{
     console.log(error.message);
   }); 


  const oldBook = [...books];
  const bookIndex = oldBook.findIndex((book)=>book.id===onebook.id)
  console.log(bookIndex);

  oldBook.splice(bookIndex, 1, newbook);
  dispatch(setBook(oldBook));

  onebook.bookname='';
  onebook.description='';
  onebook.status='AVAILABLE';
  dispatch(setSelectedBook(onebook))

  setBookname(''); //to clear inputs inside textbox when updating
  setDescription('');  //to clear inputs inside textbox when updating
}

useEffect(()=>{
  if(onebook.bookname===''){

  }else{
    setBookname(onebook.bookname);
    setDescription(onebook.description);
  }

}, [onebook])

  return (
    <>
    <div className="book-form">
      <input type="text" 
                value ={bookname}
                placeholder="Enter book name"
                onChange={(e)=> setBookname (e.target.value)}/>
      <input type="text" 
                value ={description}
                placeholder="Enter description"
                onChange={(e)=> setDescription (e.target.value)}/>


          {
            onebook.state==='UPDATING'?
            <button onClick={()=>updateBook()} className="update-book">Update</button>
            :
            <button onClick={()=>addBook()} className="add-book">Add</button>
          }
      
   </div>
   </>
  )
}
