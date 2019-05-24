import {
    UPDATE_SHOPPINGLIST,
} from '../actions/types/food'

export const initialState = {
    platos: {
        "1st": {
            "rissotto": ["arros", "formatge", "roquefort", "ceba", "llet"],
            "espaguetis carbonara": ["espaguetis", "formatge", "llet", "bacon"],
            "amanida": ["enciam", "tomaquet", "formatge", "krisia"],
            "arros 3 delicias": ["arros", "ou", "tonyina", "krisia", "pastanaga"]
        },
        "2nd": {
            "llom": ["llom"],
            "pollastre arrebossat": ["farina de galeta", "ou", "pollastre"],
            "frankfurt": ["frankfurt", "pa"],
            "hamburguesa": ["enciam", "pa", "hamburguesa"]
        }
    },
    shoppingList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SHOPPINGLIST:
            return {
                ...state,
                shoppingList: action.shoppingList
            }
        default:
            return state;
    }
}