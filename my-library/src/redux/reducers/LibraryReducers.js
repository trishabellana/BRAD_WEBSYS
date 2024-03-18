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
    ]
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return (state, payload);

    default:
        return state;
  }
}
