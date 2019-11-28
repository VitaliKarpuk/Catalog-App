import React, { Component} from 'react'
import { Link } from 'react-router-dom'
class Basket extends Component  {
   render(){
    const idToken = (JSON.parse(localStorage.getItem('okta-token-storage')))
    return(
        <div className = 'header_basket'>
            <Link to = '/registration'>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                {/* {Object.keys(idToken).length === 0 ? <p>Войти</p>: idToken.idToken.claims.name}  */}
            </Link>
        </div>
    )
   }
    
}
export default Basket