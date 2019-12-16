import React from 'react'
export default class Favorites extends React.Component {
    constructor(props) {
        super()
        this.state = {
          arrFav: [],
          star: 'fa-star'
        }
    }
    componentDidMount() {
        const arrFav = localStorage.getItem('fav') === null ? [] : JSON.parse(localStorage.getItem('fav'))
        this.setState({
            arrFav: arrFav
        })
    }
    handlStar = (e) => {
        const arrFavFromLocal = JSON.parse(localStorage.getItem('fav'))
        let a = arrFavFromLocal.filter( item => item[0].id != e.target.id)
        localStorage.setItem('fav', JSON.stringify(a))
        this.setState({
            arrFav: a
        })
    }

render() {
    return(
        <>
        {
            this.state.arrFav.map( (item, index) => {
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
              <i className = {`fa ${this.state.star} fa-2x`} id = {item[0].id} onClick = {this.handlStar}></i>  
                <h5>{item[0].price} $</h5>
              </div>
            </div>
          </div>
        }
                
            )
        }
        </>

    )
}
    
    
}