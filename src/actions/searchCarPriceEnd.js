import { SEARCH_CAR_PRICE_END } from '../constants/constants'
export const searchCarPriceEnd = (priceEnd) => {
    return{
        type: SEARCH_CAR_PRICE_END,
        priceEnd
    }
}