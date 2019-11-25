import React from 'react'
import car from '../../../img/car6.jpg'
import car2 from '../../../img/car4.jpg'
import car3 from '../../../img/car5.jpeg'
export const Slider = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src = {car} className="d-block w-100" height = '100%' alt="..." />
          </div>
          <div className="carousel-item">
            <img src={car2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={car3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}