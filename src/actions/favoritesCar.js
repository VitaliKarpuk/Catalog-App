import { FAVORITES_CAR } from '../constants/constants'
export const favoritesCar = (favorites, id) =>{
    return{
        type: FAVORITES_CAR,
        favorites,
        id
    }
}