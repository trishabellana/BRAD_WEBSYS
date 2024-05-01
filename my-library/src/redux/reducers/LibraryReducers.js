import{ActionTypes} from "../constants/Action-types";

const studentState ={
    students: [

    ]
}

const bookState ={
    books: [

    ]
}

const transactionState ={
    transactions: [

    ]
}

const singleStudentInitialized ={
    id: '',
    lastname: '',
    firstname:'',
    state: 'ACTIVE'
}

const singleBookInitialized ={
    id: '',
    book_name: '',
    description:'',
    state:'AVAILABLE'
}

const singleTransactionInitialized ={
    id: '',
    book_id: '',
    student_id:'',
    date_borrowed:'',
    state:'BORROWED'
}

export const LibraryReducers = (state=studentState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state, students:payload};

    default:
        return state;
  }
}
export const BookReducers = (state=bookState, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_BOOKS:
           return {...state,books: payload};
   
       default:
           return state;
     }
}

export const TransactionReducers = (state=transactionState, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_TRANSACTIONS:
           return {...state, transactions:payload};
   
       default:
           return state;
     }
   }

export const selectedStudentReducer = (state=singleStudentInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_STUDENT:
           return {...state, ...payload};
   
       default:
           return state;
     }
}

export const selectedBookReducer = (state=singleBookInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_BOOK:
           return {...state, ...payload};
   
       default:
           return state;
     }
}

export const selectedTransactionReducer = (state=singleTransactionInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_TRANSACTION:
           return {...state, ...payload};
   
       default:
           return state;
     }
}