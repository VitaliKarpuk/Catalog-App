import data from '../data'
import { SEARCH_CAR, RETURN_STATE, INFO_CAR, SEARCH_NEW_CAR,
        SEARCH_CAR_MODEL, SEARCH_CAR_YEAR_START, SEARCH_CAR_YEAR_END,
        SEARCH_CAR_PRICE_START, SEARCH_CAR_PRICE_END, SEARCH_CAR_BODY,
        SEARCH_CAR_FUEL, SORT_PRICE, SORT_YEAR, ADD_CAR_IN_BASKET, SORT_PRICE_MIN, SORT_YEAR_MIN } from '../constants/constants'
export const listCar = (state = data, action) => {
    switch (action.type) {
        case SEARCH_CAR:
            return state.filter(elem => elem.mark === action.mark)
        case RETURN_STATE:
            return state = data
        case INFO_CAR:
            return state.filter(elem => elem.model === action.model)
        case SEARCH_NEW_CAR:
            return state.filter( elem => elem.use === action.use)
        case SEARCH_CAR_MODEL:
            return state.filter(elem => elem.model === action.model)
        case SEARCH_CAR_YEAR_START:
            return state.filter( elem => elem.year >= action.yearStart)
        case SEARCH_CAR_YEAR_END:
            return state.filter( elem => elem.year <= action.yearEnd)
        case SEARCH_CAR_PRICE_START:
            return state.filter( elem => +elem.price >= +action.priceStart)
        case SEARCH_CAR_PRICE_END:
            return state.filter( elem => +elem.price <= +action.priceEnd)
        case SEARCH_CAR_BODY:
            return state.filter( elem => elem.body.toLowerCase() === action.body.toLowerCase())
        case SEARCH_CAR_FUEL:
            return state.filter ( elem => elem.fuel.toLowerCase() === action.fuel.toLowerCase())
        case SORT_PRICE:
            return [...state].sort( (a, b) => a.price - b.price)
        case SORT_PRICE_MIN:
            return [...state].sort((a,b) => b.price - a.price)
        case SORT_YEAR:
            return [...state].sort((a,b) => a.year - b.year)
        case SORT_YEAR_MIN:
            return [...state].sort((a,b) => b.year - a.year)
        case ADD_CAR_IN_BASKET:
            return state.push(localStorage.setItem(`${state.model}`, state))
           
    }
    
    return state
}