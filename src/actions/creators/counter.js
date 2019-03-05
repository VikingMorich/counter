import {
    ADD_COUNTER,
    REMOVE_COUNTER,
    CHANGE_INITIAL_VALUE,
    ENABLE_DEAD_MODE,
    DISABLE_DEAD_MODE,
    TOGGLE_MODAL
} from '../types/counter';

export const addCounter = (counterIds) => ({
    type: ADD_COUNTER,
    counterIds
})

export const removeCounter = (counterIds) => ({
    type: REMOVE_COUNTER,
    counterIds
})

export const changeInitialValue = (value) => ({
    type: CHANGE_INITIAL_VALUE,
    value
})

export const enableDeadMode = () => ({
    type: ENABLE_DEAD_MODE
})

export const disableDeadMode = () => ({
    type: DISABLE_DEAD_MODE
})

export const toggleModal = () => ({
    type: TOGGLE_MODAL
})