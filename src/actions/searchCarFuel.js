import { SEARCH_CAR_FUEL } from '../constants/constants'
export const searchcarFuel = (fuel) => {
    return{
        type: SEARCH_CAR_FUEL,
        fuel
    }
}