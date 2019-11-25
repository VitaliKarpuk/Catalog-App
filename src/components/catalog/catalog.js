import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import { infoCar } from '../../actions/infoCar'
import { sortPrice } from '../../actions/sortPrice'
import SearchByParameters from './searchByParameters/searchByParameters'
import { sortYear } from '../../actions/sortYear'
const Catalog = (props) => {
    const { listCar, infoCar, sortPrice, sortYear } = props
    const onChooseMark = (e) => {
        infoCar(e.target.className)
    }
    return(
        <div className = 'catalog_list'>
            <SearchByParameters/>
            <div className = 'result_search'>
                <div>
                    <p>Сортировать по :</p>
                    <div>
                        <button onClick = { () => sortYear()}>Год выпуска</button>
                        <button onClick = {() => sortPrice()}>
                            Цена</button>
                    </div>
                </div>
                <ul>
                    { listCar.map((elem, index) =>{
                        return <li key = {index}>
                                    <img src = {require (`../../img/${elem.img[0]}`)}  width = '100%' height = '100%' alt = 'car'/>
                                    <div className = 'info_car'>
                                        <div className = 'info_car__price'>
                                            <h6>{elem.year}</h6>
                                            <h5>{elem.price} $</h5>
                                        </div>
                                        <div>
                                            <Link to = '/catalog/infocar' onClick = { onChooseMark }>
                                                <h5 className = {elem.model}>{elem.mark.toUpperCase()} {elem.model}</h5>
                                            </Link>
                                            <p>{elem.use}, {elem.fuel.toLowerCase()}, {elem.body.toLowerCase()}, {elem.drive_unit.toLowerCase()}</p>
                                            <p>{elem.keywords}</p>
                                        </div>    
                                    </div>    
                                </li>})
                    }
                </ul>
            </div>
            
        </div>
    )
    
}
const mapStateToProps = ({listCar}) => {
    return{
        listCar
    }
}
export default connect (mapStateToProps, { infoCar, sortPrice, sortYear })(Catalog)