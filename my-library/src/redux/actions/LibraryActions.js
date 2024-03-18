import{ActionTypes} from "../constants/Action-types";

export const setStudent = (students) => {
    return{
        type: ActionTypes.SET_STUDENTS,
        payload: students,
    }
}