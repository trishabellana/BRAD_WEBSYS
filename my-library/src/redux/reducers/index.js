import {combineReducers} from 'redux';
import {LibraryReducers} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,

})

export default reducers;