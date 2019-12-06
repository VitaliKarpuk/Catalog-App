import { LENGHT_BASKET } from '../constants/constants'
const initialState = JSON.parse(localStorage.getItem('car')).length
export const lengthBasket = (state = initialState, action) => {
   switch (action.type) {
        case LENGHT_BASKET:
            return state = action.length      
    }
    return state
}