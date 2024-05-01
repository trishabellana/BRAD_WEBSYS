import{ActionTypes} from "../constants/Action-types";

export const setStudent = (students) => {
    return{
        type: ActionTypes.SET_STUDENTS,
        payload: students,
    }
}

export const setBook = (books) => {
    return{
        type: ActionTypes.SET_BOOKS,
        payload: books,
    }
}


export const setTransaction = (transactions) => {
    return{
        type: ActionTypes.SET_TRANSACTIONS,
        payload: transactions,
    }
}

export const setSelectedStudent = (student) => {
    return{
        type: ActionTypes.SELECTED_STUDENT,
        payload: student,
    }
}

export const setSelectedBook = (book) => {
    return{
        type: ActionTypes.SELECTED_BOOK,
        payload: book,
    }
}

export const setSelectedTransaction = (transaction) => {
    return{
        type: ActionTypes.SELECTED_TRANSACTION,
        payload: transaction,
    }
}