import {
    SET_FINAL_DATE,
    SET_TITLE
} from '../types/time';

export const setFinalDate = (date) => ({
    type: SET_FINAL_DATE,
    date
})

export const setTitle = (title) => ({
    type: SET_TITLE,
    title
})