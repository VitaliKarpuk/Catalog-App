import React, { useState} from 'react'
import { connect } from 'react-redux'
import { searchCar } from '../../../actions/searchCar'
import { returnState } from '../../../actions/returnState'
import { Link } from 'react-router-dom'
const Search = (props) => {
    const { searchCar, returnState } = props
    const [ valueInput, setValueInput ] = useState ('')
    const onChangeValueInput = ({ target : { value }}) => {
        setValueInput(value.toLowerCase())
    }
    const findCar = () => {
        returnState()
        if (valueInput.length >= 3){
            searchCar(valueInput)
            setValueInput('')
        }
    }
    return(

            <form className = 'header_search' onSubmit = {findCar}>
                <input type = 'text' placeholder = 'Поиск в каталоге. Например "bmw"' value = {valueInput} onChange = { onChangeValueInput } />
                <div className = 'header_icon' >
                    <i className="fa fa-search" aria-hidden="true" onClick = {findCar}></i>
                </div>
                <Link to = '/catalog' >
                    <button type = "submit" onClick = {findCar}>Поиск</button>
                </Link>
            </form>

    )
}
const mapStateToProps = ({listCar}) => {
    return{
        listCar
    }
}
export default connect (mapStateToProps, { searchCar, returnState })(Search)