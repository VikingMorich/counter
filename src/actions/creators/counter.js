import {
    ADD_COUNTER,
    REMOVE_COUNTER,
    CHANGE_INITIAL_VALUE,
    ENABLE_DEAD_MODE,
    DISABLE_DEAD_MODE,
    TOGGLE_MODAL,
    ENABLE_CUSTOM_NAMES,
    DISABLE_CUSTOM_NAMES,
    UPDATE_COUNTERS,
    ENABLE_LEADER,
    DISABLE_LEADER,
    SET_LEADER,
    TOGGLE_CONFIGURATION,
    ENABLE_EDITABLECOLOURS,
    DISABLE_EDITABLECOLOURS,
    TOGGLE_COLOURMODAL,
    UPDATE_COUNTERCOLOURS
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

export const enableCustomNames = () => ({
    type: ENABLE_CUSTOM_NAMES
})

export const disableCustomNames = () => ({
    type: DISABLE_CUSTOM_NAMES
})

export const updateCounters = (newCounters) => ({
    type: UPDATE_COUNTERS,
    newCounters
})

export const enableLeader = () => ({
    type: ENABLE_LEADER
})

export const disableLeader = () => ({
    type: DISABLE_LEADER
})

export const setLeader = (leaderId) => ({
    type: SET_LEADER,
    leaderId
})

export const toggleConfiguration = () => ({
    type: TOGGLE_CONFIGURATION
})

export const enableEditableColours = () => ({
    type: ENABLE_EDITABLECOLOURS
})

export const disableEditableColours = () => ({
    type: DISABLE_EDITABLECOLOURS
})

export const toggleColourModal = (id) =>({
    type: TOGGLE_COLOURMODAL,
    id
})

export const updateCounterColours = (newColours) => ({
    type: UPDATE_COUNTERCOLOURS,
    newColours
})