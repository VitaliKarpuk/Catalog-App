import { SEARCH_CAR_MODEL } from '../constants/constants'
export const searchCarModel = (model) => {
    return{
        type: SEARCH_CAR_MODEL,
        model
    }
}