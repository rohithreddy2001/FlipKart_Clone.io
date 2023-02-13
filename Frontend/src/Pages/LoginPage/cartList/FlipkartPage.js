import React, { useState } from 'react'
import classes from './cart_list.module.css'
import emptyCart from './emptyCart.png'
import { useNavigate } from 'react-router-dom'
const FlipkartPage = () => {

    let navigate = useNavigate()
    const cartLoginHandler =() => {
        console.log(true)
        navigate('/signInPage')
    }
  return (
    <div className={classes.cart_page}>
        <img src={emptyCart} alt='image not found' className={classes.empty_img} ></img>
        <h4>Missing Cart items?</h4>
        <h5>Login to see the items you added previously</h5>
        <button className={classes.l_btn} onClick={cartLoginHandler}>Login</button>
    </div>
  )
}

export default FlipkartPage
