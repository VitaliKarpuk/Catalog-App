import React, { Component } from 'react'
import './style.css'

export default class PageRegistration extends Component {
  constructor(props) {
    super();
    this.state = {
      arrCar: [],
      valueClicer: 1,
      totalСost: 0
    };
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this)
}
  componentDidMount() {
    const car = JSON.parse(localStorage.getItem('car'))
    const arrPrice = []
    car.forEach(element => arrPrice.push(element[0].price) );
    this.setState({
      arrCar: car,
      totalСost: arrPrice.reduce((sum, current) => +sum + +current, 0)
    })
  }

  handleClickPlus(e) {
    this.setState((prevState) => ({ valueClicer: prevState.valueClicer + 1 }));
}
  handleClickMinus() {
    this.setState((prevState) => ({ valueClicer: prevState.valueClicer - 1 }));
  }
  render() {
  const name = localStorage.getItem('name')    
    return (
      <>
        <h1>Welcome {name}</h1>
        <div className = 'basket'>
          <div>
          {this.state.arrCar.map((item, index) => {
            return <div className = 'car_in__basket' key = {index}>
                      <div className = 'img_in_basket'>
                        <img src = {require (`../../img/${item[0].img[0]}`)}  width = '100%' height = '100%' alt = 'car'/>
                      </div>
                      <div className = 'info_car_basket'>
                        <div>
                          <h6>{item[0].mark.toUpperCase()} {item[0].model}</h6>
                          <h6>{item[0].year}</h6>
                          <p>{item[0].body.toLowerCase()}, {item[0].fuel.toLowerCase()}, {item[0].drive_unit.toLowerCase()}</p>
                        </div>
                        <div>
                          <div className = 'clicer_basket'>
                            <div onClick = {this.handleClickPlus} key = {index}><i class= 'fa fa-plus' aria-hidden="true"></i></div>
                            {this.state.valueClicer}
                            <div onClick = {this.handleClickMinus}><i class="fa fa-minus"  aria-hidden="true"></i></div>
                          </div>
                          <h5>{item[0].price} $</h5>
                          <button className = 'remove_basket'>Убрать из корзины</button>
                          
                        </div>
                      </div>
                    </div>
          })}
          </div>
          <div className = 'do-order'>
            <h5>Итого:</h5>
            <h4>{this.state.totalСost} $</h4>
            </div>
            </div>
        </>
    );
  }
}

