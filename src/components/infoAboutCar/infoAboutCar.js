import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
const InfoAboutCar = (props) => {
    const { listCar } = props
    const [ valueButton, setValueButton ] = useState('Добавить в корзину')
    console.log(listCar[0].model)
    const addInBasket = () => {
        localStorage.setItem(`${listCar[0].model}`, JSON.stringify(listCar[0]))
        
        setValueButton('Перейти в карзину')
        
    }
    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };
    return(
        <div className = 'info_about__car'>
            <h5>{listCar[0].mark.toUpperCase()} {listCar[0].model}, {listCar[0].year}<span>{listCar[0].price} $</span></h5>
            <div>
            <div className = 'info_car_options'>
                <ul>
                    <li><span>Марка:</span> {listCar[0].mark.toUpperCase()}</li>
                    <li><span>Модель:</span> {listCar[0].model}</li>
                    <li><span>Состояние:</span> {listCar[0].use}</li>
                    <li><span>Год выпуска:</span> {listCar[0].year}</li>
                    <li><span>Тип топлива:</span> {listCar[0].fuel.toLowerCase()}</li>
                    <li><span>Тип кузова:</span> {listCar[0].body.toLowerCase()}</li>
                    <li><span>Привод:</span> {listCar[0].drive_unit.toLowerCase()}</li>
                    <li><span>Стоимость:</span> {listCar[0].price} $</li>
                </ul>
                {valueButton === 'Перейти в карзину' ? <Link to = '/registration'>
                <button onClick = {addInBasket}>{valueButton}</button>
                </Link> : <button onClick = {addInBasket}>{valueButton}</button>}
            </div>
            <div>
            <Slider {...settings}>
        <div>
        <img src= {require(`../../img/${listCar[0].img[0]}`)}  className="d-block w-100" alt="..."/>
        </div>
        <div>
            <img src= {require(`../../img/${listCar[0].img[1]}`)}  className="d-block w-100" alt="..."/>
        </div>
        <div>
            <img src= {require(`../../img/${listCar[0].img[2]}`)}  className="d-block w-100" alt="..."/>
        </div>
      </Slider>
                <p>{listCar[0].keywords}</p>
                <div>
                    <h6>Дополнительные опции:</h6>
                    <ul>
                        {listCar[0].additional_options.map(elem => <li>{elem}</li>)}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
const maStateToProps = ({listCar}) => {
    return{
        listCar
    }
}
export default connect (maStateToProps) (InfoAboutCar)