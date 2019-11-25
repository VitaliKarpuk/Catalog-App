import { SEARCH_CAR_PRICE_START } from '../constants/constants'
export const searchCarPriceStart = (priceStart) => {
    return{
        type: SEARCH_CAR_PRICE_START,
        priceStart
    }
}