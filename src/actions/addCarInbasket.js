import { ADD_CAR_IN_BASKET } from '../constants/constants'
export const addCarInBasket = (model) =>{
    return{
        type: ADD_CAR_IN_BASKET,
        model
    }
}