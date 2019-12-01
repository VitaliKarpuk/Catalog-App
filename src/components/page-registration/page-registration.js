import React, { Component } from 'react'
import './style.css'

export default class PageRegistration extends Component {
  state = {
    arrCar: []
  }
  componentDidMount() {
    const car = localStorage.getItem('car')
    this.setState({
      arrCar: JSON.parse(car)
    })

  }
  
  render() {
    
  const name = localStorage.getItem('name')
  console.log(this.state.arrCar)
    
    return (
        <div>
            <h1>Welcome {name}</h1>
            <div className = 'basket'>
              <h4>Корзина</h4>
  {this.state.arrCar.map((item) => {
    return <div>{item[0].model}
      <img src = {require (`../../img/${item[0].img[0]}`)}  width = '100%' height = '100%' alt = 'car'/>
      <div className = 'info_car__price'>
        <h6>{item[0].year}</h6>
        <h5>{item[0].price} $</h5>
      </div>
    </div>
  })}
            </div>

        </div>
    );
  }
}

