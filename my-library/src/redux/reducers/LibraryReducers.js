import{ActionTypes} from "../constants/Action-types";

import React from 'react'

const initialState ={
    students: [
        {
            id:1,
            lastname: 'Abellana',
            firstname:'Trisha'
        },

        {
            id:2,
            lastname: 'Genite',
            firstname:'Ealton'
        }
    ],

    books: [
        {
            id:1,
            bookname: 'P1',
            desciprtion:'Programming 1'
        },

        {
            id:2,
            bookname: 'P2',
            desciprtion:'Programming 2'
        }
    ]
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return (state, payload);

    case ActionTypes.SET_BOOKS:
        return (state, payload);

    default:
        return state;
  }
}

