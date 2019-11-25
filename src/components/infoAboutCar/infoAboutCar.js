import React from 'react'
import { connect } from 'react-redux'
import './style.css'
const InfoAboutCar = (props) => {
    const { listCar } = props
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
                <button>Добавить в корзину</button>
            </div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide carousel_info" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src= {require(`../../img/${listCar[0].img[0]}`)}  className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src= {require(`../../img/${listCar[0].img[1]}`)}  className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src= {require(`../../img/${listCar[0].img[2]}`)}  className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
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