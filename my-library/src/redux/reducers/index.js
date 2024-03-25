import {combineReducers} from 'redux';
import {LibraryReducers,BookReducers, selectedStudentReducer} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
    singleStudent:selectedStudentReducer,
})

export default reducers;