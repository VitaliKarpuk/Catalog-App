import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Basket = (props) =>  {
    return(
        <div className = 'header_basket'>
            <Link to = '/basket'>
                {props.lengthBasket === 0 ? <div className = 'mybasket'></div> : 
                <div className = 'mybasket'>
                <div>{props.lengthBasket}</div>
            </div>
                }
                <p>Корзина</p>               
            </Link>
         </div>
     )
}
    
const mapStateToProps = ({lengthBasket}) => {
    return{
        lengthBasket
    }
        
}
export default connect(mapStateToProps)(Basket)