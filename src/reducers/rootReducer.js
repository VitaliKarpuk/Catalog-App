import { combineReducers } from 'redux'
import { listCar } from './listCar'
import { sortPrice } from './sortPricer'
export const rootReducer = combineReducers ({
    listCar
})