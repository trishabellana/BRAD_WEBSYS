import{ActionTypes} from "../constants/Action-types";


const initialState ={
    students: [
        {
            id:1,
            lastname: 'Abellana',
            firstname:'Trisha',
            state: 'ACTIVE'
        },

        {
            id:2,
            lastname: 'Del Rosario',
            firstname:'Raymark',
            state: 'ACTIVE'
        }
    ],

}
const initialStates ={

    books: [
        {
            id:1,
            bookname: 'P1',
            description:'Programming 1',
            status: 'Available'
        },

        {
            id:2,
            bookname: 'P2',
            description:'Programming 2',
            status: 'Not Available'
        }
    ]
}

const singleStudentInitialized={
    id:'',
    firstname:'',
    lastname:'',
    state:'ACTIVE'
}

const singleBookInitialized={
    id:'',
    bookname:'',
    description:'',
    state:'AVAILABLE'
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};

    default:
        return state;
  }
}

export const BookReducers = (state=initialStates, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_BOOKS:
           return {...state,books:payload};
   
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