import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function DisplayBook() {
    const books = useSelector((state) => state.allBooks.books);
    console.log(books);

  return (
    <>
    <table className="book-table">
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
     

      <tbody>

          {
            books.map((book)=>{
              return(
                <tr key={book.id}>
                 <td>{book.id}</td>
                 <td>{book.bookname}</td>
                 <td>{book.description}</td>
                 <td>{book.status}</td>
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
