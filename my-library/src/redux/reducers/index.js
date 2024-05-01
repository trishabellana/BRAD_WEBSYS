import {combineReducers} from 'redux';
import {LibraryReducers, BookReducers, selectedStudentReducer, selectedBookReducer, TransactionReducers, selectedTransactionReducer} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks: BookReducers,
    allTransactions: TransactionReducers,
    singleTransaction: selectedTransactionReducer,
    singleStudent:selectedStudentReducer,
    singleBook: selectedBookReducer

})

export default reducers;