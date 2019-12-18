import React, { useState } from 'react'
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
    const [ idMenu, setIdMenu ] = useState('iconMenu')
    const [ classNavbar, setClassNavbar ] = useState('collapse navbar-collapse')
    const onClickCatalog = () =>{
        returnState()
        handleClass()
    }
    const onClickNewCar = () => {
        returnState()
        searchNewcar('Новый автомобиль')
        handleClass()
    }
    const onClickOldCar = () => {
        returnState()
        searchNewcar('Автомобиль с пробегом')
        handleClass()
    }
    const onClickTruck = () => {
        returnState()
        searchNewcar('Грузовой транспорт')
        handleClass()
    }
    const onClickBus = () => {
        returnState()
        searchNewcar('Автобус')
        handleClass()
    }
    const handleMenu = () => {
            idMenu === 'iconMenu' ? setIdMenu('xMenu') : setIdMenu('iconMenu')
            idMenu === 'iconMenu' ? setClassNavbar('collapse navbar-collapse show') : setClassNavbar('collapse navbar-collapse')   
    }
    const handleClass = () => {
        setClassNavbar('collapse navbar-collapse')
        classNavbar === 'collapse navbar-collapse' ? setIdMenu('xMenu') : setIdMenu('iconMenu')
    }
    return(
    <>
        <div className = 'nav_menu'>
            <div className = 'icon_menu'></div>
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
                <Link to = '/services' >
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

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div id = {idMenu} onClick = {handleMenu} ></div>
      <div className={classNavbar} id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <li className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false"><div></div> Каталог <span class="caret"></span></li>
            <ul className="dropdown-menu">
            <Link to = '/catalog' onClick = {onClickCatalog}>
                <li>Все автомобили</li>
            </Link>
            <Link to = '/catalog/newcar' onClick = {onClickNewCar}>
                <li>Автомобили с салона</li>
            </Link>
            <Link to = '/catalog/oldcar' onClick = { onClickOldCar }>
                <li>Автомобили с пробегом</li>
            </Link>
            <Link to = '/catalog/truck' onClick = { onClickTruck }>
                <li>Грузовой транспорт</li>
            </Link>
            <Link to = '/catalog/bus' onClick = { onClickBus } >
                <li>Автобусы</li>
            </Link>
            </ul>
          </li>
          <Link to = '/services' onClick = {handleClass}>
                <div className = 'menu_services'></div>
                <li>Услуги</li>
            </Link>
            <Link to = '/about' onClick = {handleClass}>
            <div className = 'aboutUs'></div>
                <li>О компании</li>
            </Link>
            <Link to = '/contact' onClick = {handleClass}>
            <div className = 'contact'></div>
                <li>FAQ</li>
            </Link>
        </ul>
      </div>
    </div>
  </nav>














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