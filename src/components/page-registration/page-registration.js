import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class PageRegistration extends Component {
  constructor(props) {
    super()
    this.state = {
      arrCar: [],
      valueClicer: 1,
      totalСost: 0,
      totalCar: 'машина',
      idRemove: null,
    }
    this.handleClickPlus = this.handleClickPlus.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
}
  componentDidMount() {
    const car = JSON.parse(localStorage.getItem('car'))
    const arrPrice = []
    car.forEach(element => arrPrice.push(element[0].price) );
    let c = ''
    if(car.length === 1 ){
       c = 'машина'
    }if (car.length === 2 || car.length === 3 || car.length === 4 ){
      c = 'машины'
    }if(car.length >= 5){
     c = 'машин'
    };
    this.setState({
      arrCar: car,
      totalСost: arrPrice.reduce((sum, current) => +sum + +current, 0),
      totalCar: c,
    })
  }

  handleClickPlus(e) {
    this.setState((prevState) => ({ valueClicer: prevState.valueClicer + 1 }));
}
  handleClickMinus() {
    this.setState((prevState) => ({ valueClicer: prevState.valueClicer - 1 }));
  }
  handleRemove(e){
    const carRemoveArr = JSON.parse(localStorage.getItem('car'))
    const newArrCar = carRemoveArr.filter(elem => elem[0].id != e.target.id)
    const arrPrice = []
    newArrCar.forEach(element => arrPrice.push(element[0].price) );
    let c = ''
    if(newArrCar.length === 1 ){
      c = 'машина'
    }if (newArrCar.length === 2 || newArrCar.length === 3 || newArrCar.length === 4 ){
      c = 'машины'
    }if(newArrCar.length >= 5){
      c = 'машин'
     }
    this.setState({
      arrCar:newArrCar,
      totalСost: arrPrice.reduce((sum, current) => +sum + +current, 0),
      totalCar: c
    })
    localStorage.setItem('car', JSON.stringify(newArrCar))
  }
  
  render() {
    
    return (
      <>
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
                          {/* <div className = 'clicer_basket'>
                            <div onClick = {this.handleClickPlus} key = {index}><i class= 'fa fa-plus' aria-hidden="true"></i></div>
                            {this.state.valueClicer}
                            <div onClick = {this.handleClickMinus}><i class="fa fa-minus"  aria-hidden="true"></i></div>
                          </div> */}
                          <h5>{item[0].price} $</h5>
                          <button className = 'remove_basket' id = {item[0].id} onClick = {this.handleRemove}>Убрать из корзины</button>
                        </div>
                      </div>
                    </div>
          })}
          </div>
          
            {localStorage.getItem('car') === null || this.state.arrCar.length === 0  ?
             <div className = 'order-empty'>
               <Link to = '/'><h3>onlin<span>car</span></h3></Link>
                <h4>Корзина</h4>
                <img src = {require (`../../img/truck.svg`)}  width = '90%' height = '90%' alt = 'car'/>
                <p>Ваша корзина пуста. Перейдите в <Link to = 'catalog'>каталог</Link>  и добавьте товары.</p>
             </div>:
            
            <div className = 'do-order'>
            <div>
              <h4>Итого: {`${this.state.totalСost} $`} </h4>
              <h5>{this.state.arrCar.length} {this.state.totalCar}</h5>
            </div>
            <button>Перейти к оформлению</button>
          </div>}
          </div>
        </>
    );
  }
}

