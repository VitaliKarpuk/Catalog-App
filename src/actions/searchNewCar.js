import { SEARCH_NEW_CAR } from '../constants/constants'
export const searchNewcar = (use) => {
    return{
        type: SEARCH_NEW_CAR,
        use
    }
}