import React from 'react'
import Search from './Search/search'
import PersonalArea from './personal-area/personal-area'
import NavMenu from './nav-menu/nav-menu'
import { Link } from 'react-router-dom'
import Basket from './basket/basket'
import { Favorites } from '../favorites/favorites'
import './style.css'
export const Header = () => {
    return(
        <>
        <div className = 'header_wrapper'>
            <div className = 'header'>
                <Link to = '/'>
                    <div className = 'header_logo'>onlin<span>car</span></div>
                </Link>
                <Search />
                <Basket />
                <PersonalArea />
            </div>
        </div>
        <NavMenu />
        </>
    )
}