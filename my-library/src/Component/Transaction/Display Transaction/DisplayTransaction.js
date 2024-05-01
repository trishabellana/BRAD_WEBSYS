import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../../http';
import { setSelectedTransaction, setTransaction } from '../../../redux/actions/LibraryActions';

export default function DisplayTransaction() {
  const transactions = useSelector((state) => state.allTransactions.transactions);
  const onetransaction = useSelector((state) => state.singleTransaction);
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    if (!dateString) {
      return ''; // Return empty string or appropriate placeholder for null dates
    }

    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return ''; // Return empty string if the date is invalid
    }

    // Format the date as 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const ReturnBook = (id) => {
    console.log(id);
    const singletransaction = transactions.find((transaction) => transaction.id === id);
    singletransaction.status = 'RETURNED';
    console.log(singletransaction);

    const returntransaction = {
      status: 'RETURNED'
    };

    http.put(`borroweds/${singletransaction.id}/edit`, returntransaction)
      .then((result) => {
        console.log(result.data);
      })
      .catch(error => {
        console.log(error.message);
      });

    onetransaction.status = 'RETURNED';
    dispatch(setSelectedTransaction(singletransaction));
  };

  const getTransactionData = () => {
    http.get(`borroweds`)
      .then((result) => {
        console.log(result.data);
        dispatch(setTransaction(result.data[0]));
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  return (
    <>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Student Name</th>
            <th>Date Borrowed</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.filter((transaction) => transaction.status !== 'REMOVED')
            .map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.bookname}</td>
                <td>{transaction.studentname}</td>
                <td>{formatDate(transaction.borrowed_date)}</td>
                <td>{transaction.status}</td>
                <td>
                  <button onClick={() => ReturnBook(transaction.id)} className='return-button' disabled={transaction.status === 'RETURNED'} >
                    Return
                  </button>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}