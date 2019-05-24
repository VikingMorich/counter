import {
    UPDATE_SHOPPINGLIST,
} from '../types/food';

export const updateShoppingList = (shoppingList) => ({
    type: UPDATE_SHOPPINGLIST,
    shoppingList
})