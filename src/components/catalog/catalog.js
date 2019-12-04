import React, { useState } from 'react'
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
    const [ valueButton, setValueButton ] = useState('Добавить в корзину')
    let car = []
    const getCar = () => {
        let arrCar = localStorage.getItem('car')
        if(arrCar !== null){
            car = JSON.parse(arrCar)
        }
        return car
    }
    const addInBasket = () => {
        let car = getCar(listCar)

        let index = car.indexOf(listCar.id)
        if(index === -1){
            car.push(listCar)
        }
        localStorage.setItem(`car`, JSON.stringify(car))
        setValueButton('Перейти в карзину')
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
                                            <div>
                                            <Link to = '/catalog/infocar' onClick = { onChooseMark }>
                                                <h5 className = {elem.model}>{elem.mark.toUpperCase()} {elem.model}</h5>
                                            </Link>
                                            {/* {valueButton === 'Перейти в карзину' ? <Link to = '/profile'>
                <button >{valueButton}</button>
                </Link> : <button onClick = {addInBasket}>{valueButton}</button>} */}
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
export default connect (mapStateToProps, { infoCar, sortPrice, sortYear })(Catalog)