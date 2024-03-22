import {combineReducers} from 'redux';
import {LibraryReducers} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:LibraryReducers,

})

export default reducers;