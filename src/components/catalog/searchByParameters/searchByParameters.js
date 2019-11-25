import React from 'react'
import { connect } from 'react-redux'
import { searchCar } from '../../../actions/searchCar'
import { returnState } from '../../../actions/returnState'
import { search } from '../../../actions/search'
import { searchCarModel } from '../../../actions/searchCarModel'
import { searchCarYearStart } from '../../../actions/searchCarYearStart'
import { searchCarYearEnd } from '../../../actions/searchCarYearEnd'
import { searchCarPriceStart } from '../../../actions/searchCarPriceStart'
import { searchCarPriceEnd } from '../../../actions/searchCarPriceEnd'
import { searchCarBody } from '../../../actions/searchCarBody'
import { searchcarFuel } from '../../../actions/searchCarFuel'
const SearchByParameters = (props) => {
    const { listCar, searchCar, returnState, searchCarModel,
            searchCarYearStart, searchCarYearEnd, searchCarPriceStart, searchCarPriceEnd,
            searchCarBody, searchcarFuel } = props
    const yearBirth = []
    const price = ['1000', '3000', '5000', '6000','7000','10000', '14000', '17000', '20000', '25000', '30000', '35000', '40000', '50000'] 
    const mark = ['марка автомобиля'];
    const body = ['тип кузова'];
    listCar.forEach(element => {
        if(!mark.includes(element.mark)){
            mark.push(element.mark);
        }
        return mark;
    });
    listCar.forEach(element => {
        if(!body.includes(element.body)){
            body.push(element.body)
        }
        return body;
    })
    listCar.forEach(element => {
        if(!mark.includes(element.mark)){
            mark.push(element.mark);
        }
        return mark;
    });
    const onChooseMark = ({target: {value}}) => {
        returnState()
        value !== 'марка автомобиля' ? searchCar(value.toLowerCase()) : returnState()
    }
    for(let i = 1990; i <= 2019; i++){
        yearBirth.push(i)
    }
    return(
        <div className = 'options_car'>
                <h5>ПАРАМЕТРЫ АВТО</h5>
                <form>
                <select  id = 'select_mark' onChange = {onChooseMark}>
                    {mark.map( elem => <option>{elem}</option>)}
                </select>
                <select id = 'select_model' onChange = {(e) => e.target.value !== 'Модель' ? searchCarModel(e.target.value) : undefined }>
                    <option>Модель</option>
                    {listCar.map( elem => <option>{elem.model}</option>)}
                </select>
                <div>
                <h6>Год выпуска</h6>
                <select id = 'select_yearStart' onChange = { (e) => searchCarYearStart(e.target.value)}>
                    {yearBirth.map(elem => <option>{elem}</option>)}
                </select>
                <select id = 'select_yearEnd' onChange = { (e) => searchCarYearEnd(e.target.value)}>
                    {yearBirth.reverse().map(elem => <option>{elem}</option>)}
                </select>
                </div>
                <div>
                <h6>Цена, USD</h6>
                <select id = 'select_priceStart' onChange = { (e) => searchCarPriceStart(e.target.value)}>
                    { price.map( elem => <option>{elem}</option>)}
                </select>
                <select id = 'select_priceEnd' onChange = { (e) => searchCarPriceEnd(e.target.value)}>
                    { price.map( elem => <option>{elem}</option>)}
                </select>
                </div>
                <select id = 'select_bodyCar' onChange = { (e) => {
                    returnState()
                    searchCarBody(e.target.value.toLowerCase())}}>
                    { body.map( elem => <option>{elem}</option>)}
                </select>
                <div>
                    <button value = 'бензин' onClick = {
                        (e) => {
                            e.preventDefault()
                            searchcarFuel(e.target.value)
                        }
                    }>Бензин</button>
                    <button value = 'дизель' onClick = {
                        (e) => {
                            e.preventDefault()
                            searchcarFuel(e.target.value)
                        }
                    }>Дизель</button>
                </div>
                </form>
            </div>
    )
}
const mapStateToProps = ({listCar}) => {
    return{
        listCar
    }
}
export default connect (mapStateToProps,
    { searchCar, returnState, search, searchCarModel, searchCarYearStart,
    searchCarYearEnd, searchCarPriceStart, searchCarPriceEnd, searchCarBody, searchcarFuel })(SearchByParameters);