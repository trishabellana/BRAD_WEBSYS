import {combineReducers} from 'redux';
import {LibraryReducers,BookReducers} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,

})

export default reducers;