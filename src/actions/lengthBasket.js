import { LENGHT_BASKET } from '../constants/constants'
export const totalOrder = (length) =>{
    return{
        type: LENGHT_BASKET,
        length
    }
}