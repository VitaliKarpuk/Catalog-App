import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import { infoCar } from '../../actions/infoCar'
import { sortPrice } from '../../actions/sortPrice'
import SearchByParameters from './searchByParameters/searchByParameters'
import { sortYear } from '../../actions/sortYear'
import { sortPriceMin } from '../../actions/sortePriceMin'
import { sortYearMin } from '../../actions/sortYearMin'
import { favoritesCar } from '../../actions/favoritesCar'
const Catalog = (props) => {
    const { listCar, infoCar, sortPrice, sortYear, sortPriceMin, sortYearMin, favoritesCar } = props
    const onChooseMark = (e) => {     
        infoCar(e.target.className)
        console.log(e.target.className)
    }
    let arrfav = []

    const getFav = (a) => {
        let f = localStorage.getItem('fav')
        if(f !== null) {
            arrfav = JSON.parse(f)
        }
         return arrfav
    }
    const handlFavoritesStar = (e) => {
        getFav() 
        let a  = listCar.filter(elem => elem.model === e.target.parentElement.parentElement.parentElement.parentElement.className)
        console.log(arrfav)
        arrfav.push(a)
        console.log(arrfav)
        localStorage.setItem('fav', JSON.stringify(arrfav))
    }
    return(
        <div className = 'catalog_list'>
            <SearchByParameters/>
            <div className = 'result_search'>
                <div>
                    <p>Сортировать по :</p>
                    <div>
                        <ul className = 'sort'>
                            <li onClick = {() => sortYear()}><span>году выпуска &#x2193;</span></li>
                            <li onClick = {() => sortYearMin()}><span>году выпуска &#x2191;</span></li>
                            <li onClick = {() => sortPrice()}><span>цене &#x2193;</span></li>
                            <li onClick = {() => sortPriceMin()}><span>цене &#x2191;</span></li>
                        </ul>
                    </div>
                </div>
                <ul>
                    { listCar.map((elem, index) =>{
                        return <li key = {index} className = {`${elem.model}`}>
                                    <Link to = '/catalog/infocar'  onClick = { onChooseMark }>
                                        <img className = {elem.model} src = {require (`../../img/${elem.img[0]}`)}  width = '100%' height = '100%' alt = 'car'/>
                                    </Link>
                                    <div className = 'info_car'>
                                        <div className = 'info_car__price'>
                                            <h6>{elem.year}</h6>
                                            <h5>{elem.price} $</h5>
                                        </div>
                                        <div>
                                            <div>
                                                <Link to = '/catalog/infocar'  onClick = { onChooseMark }>
                                                    <h5 className = {elem.model}>{elem.mark.toUpperCase()} {elem.model}</h5>
                                                </Link>
                                            {/* <i className = {`fa ${elem.favorites} fa-2x`} onClick = {handlFavoritesStar}></i>                                        */}
                                            </div>
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
export default connect (mapStateToProps, { infoCar, sortPrice, sortYear, sortPriceMin, sortYearMin, favoritesCar })(Catalog)