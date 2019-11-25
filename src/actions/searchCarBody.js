import { SEARCH_CAR_BODY } from '../constants/constants'
export const searchCarBody = (body) => {
    return{
        type: SEARCH_CAR_BODY,
        body
    }
}