import React, {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import http from '../../../http';
import { setTransaction } from '../../../redux/actions/LibraryActions';

export default function AddTransaction() {
    const [ student_id, setStudentid] = useState ('');
    const [ book_id, setBookid] = useState ('');
    const dispatch = useDispatch();
    const transactions = useSelector((state)=> state.allTransactions.transactions);
    const onetransaction = useSelector((state)=> state.singleTransaction)
    
    const borrowBook=()=>{
      const newtransaction={
        book_id: book_id,
        student_id: student_id,
        status: 'BORROWED'
      }
       // database connection
    
       http.post(`borroweds`, newtransaction).then((result)=>{
        console.log(result.data);
      }).catch(error=>{
        console.log(error.message);
      });
      
      const oldTransaction = [...transactions];
      oldTransaction.push(newtransaction);
      dispatch(setTransaction(oldTransaction));
    
    }

    useEffect(()=>{
      if(onetransaction.student_id===''){
    
      }else{
        setStudentid(onetransaction.student_id);
        setBookid(onetransaction.book_id);
    
      }
    },[onetransaction])  
      return (
        <div className="transaction-form">
            <input type="text"
                value={student_id}
                placeholder="Enter Student ID"
                onChange={(e)=> setStudentid (e.target.value)}/>
            <input type="text"
                value={book_id}
                placeholder="Enter Book ID"
                onChange={(e)=> setBookid (e.target.value)}/>
            <button onClick={()=>borrowBook()} className="borrow-book">Borrow</button>

    
       </div>
      )
}