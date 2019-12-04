import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const Basket = () => {
    const [ lengthOrder, setLengthOrder ] = useState ('')
    useEffect (() => {
        const l = JSON.parse(localStorage.getItem('car'))
        setLengthOrder(l.length)
    })
    return(
        <div className = 'header_basket'>
            <Link to = '/registration'>
            <div className = 'mybasket'>
                <div>{lengthOrder}</div>
            </div>
                <p>Корзина</p>
               
            </Link>
         </div>
     )
    
}
export default Basket