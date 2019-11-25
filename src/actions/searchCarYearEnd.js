import { SEARCH_CAR_YEAR_END } from '../constants/constants'
export const searchCarYearEnd = (yearEnd) => {
    return{
        type: SEARCH_CAR_YEAR_END,
        yearEnd
    }
}