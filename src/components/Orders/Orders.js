import React, { useEffect, useState } from 'react'
export const Orders = () => {
    const [ arrCar, setArrCar ] = useState([])
    const arr = []
    const arrCarInBasket = []
    const toBasket = () => {
    arr.push(Object.values(localStorage))
        for(let i = 0; i < arr[0].length; i++){
            arrCarInBasket.push(JSON.parse(arr[0][i]) )
        }
        const newArrCarInBasket = arrCarInBasket.filter((elem, index) => index >= 2)
        setArrCar(newArrCarInBasket)
    }
    return(
        <div className = 'orders'>
            <button onClick = {toBasket}>Корзина</button>
        </div>
    )
}