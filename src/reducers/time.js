import {
    SET_FINAL_DATE,
    SET_TITLE
} from '../actions/types/time'

export const initialState = {
    title: "",
    finalDate: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FINAL_DATE:
            return {
                ...state,
                finalDate: action.date
            }
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }
}