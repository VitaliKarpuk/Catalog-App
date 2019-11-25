import { SEARCH_CAR } from '../constants/constants'
export const searchCar = (mark, use) => {
    return{
        type: SEARCH_CAR,
        mark,
        use
    }
}