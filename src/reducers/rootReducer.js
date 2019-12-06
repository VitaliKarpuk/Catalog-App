import { combineReducers } from 'redux'
import { listCar } from './listCar'
import { lengthBasket } from './lengthBaket'
export const rootReducer = combineReducers ({
    listCar,
    lengthBasket
})