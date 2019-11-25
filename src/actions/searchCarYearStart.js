import { SEARCH_CAR_YEAR_START } from  '../constants/constants'
export const searchCarYearStart = (yearStart) => {
    return{
        type: SEARCH_CAR_YEAR_START,
        yearStart
    }
}