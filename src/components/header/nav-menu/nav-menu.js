import React from 'react'
import { Route, Link } from 'react-router-dom'
import { CatalogNewCar } from '../../catalog/catalog_new'
import { CatalogOldCar } from '../../catalog/catalog_oldcar'
import { CatalogBus } from '../../catalog/catalog_bus'
import { CatalogTruck } from '../../catalog/catalog_truck'
import { connect } from 'react-redux'
import './style.css'
import { returnState } from '../../../actions/returnState'
import { searchCar } from '../../../actions/searchCar'
import InfoAboutCar from '../../infoAboutCar/infoAboutCar'
import { searchNewcar } from '../../../actions/searchNewCar'
export const NavMenu = (props) => {
    const { returnState, searchNewcar } = props
    const onClickCatalog = () =>{
        returnState()
    }
    const onClickNewCar = () => {
        returnState()
        searchNewcar('Новый автомобиль')
    }
    const onClickOldCar = () => {
        returnState()
        searchNewcar('Автомобиль с пробегом')
    }
    const onClickTruck = () => {
        returnState()
        searchNewcar('Грузовой транспорт')
    }
    const onClickBus = () => {
        returnState()
        searchNewcar('Автобус')
    }
    return(
    <>
        <div className = 'nav_menu'>
            <ul className = 'nav_menu__catalog'>
                <Link to = '/catalog'>
                    <li><i className="fa fa-list" aria-hidden="true" onClick = { onClickCatalog }></i> <span onClick = { onClickCatalog }>Каталог</span>
                        <ul className = 'menu_catalog'>
                            <Link to = '/catalog/newcar' onClick = {onClickNewCar}>
                                <li>АВТОМОБИЛИ С САЛОНА</li>
                            </Link>
                            <Link to = '/catalog/oldcar' onClick = { onClickOldCar }>
                                <li>АВТОМОБИЛИ С ПРОБЕГОМ</li>
                            </Link>
                            <Link to = '/catalog/truck' onClick = { onClickTruck }>
                                <li>ГРУЗОВОЙ ТРАНСПОРТ</li>
                            </Link>
                            <Link to = '/catalog/bus' onClick = { onClickBus } >
                                <li>АВТОБУСЫ</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link to = '/services'>
                    <li>Услуги</li>
                </Link>
                <Link to = '/about'>
                    <li>О компании</li>
                </Link>
                <Link to = '/contact'>
                    <li>FAQ</li>
                </Link>
            </ul>
        </div>
    <Route path = '/catalog/newcar' component = {CatalogNewCar} />
    <Route path = '/catalog/oldcar' component = {CatalogOldCar} />
    <Route path = '/catalog/truck' component = {CatalogTruck} />
    <Route path = '/catalog/bus' component = {CatalogBus} />
    <Route path = '/catalog/infocar' component = {InfoAboutCar} />
    </>
    )
}
const mapStateToProps = ({listCar}) =>{
    return{
        listCar
    }
}
export default connect (mapStateToProps, { returnState, searchCar, searchNewcar })(NavMenu) 