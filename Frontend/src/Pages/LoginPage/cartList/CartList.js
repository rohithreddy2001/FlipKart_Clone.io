import React, {useState} from 'react'
import classes from './cart_list.module.css'
import emptyCart from './emptyCart.png'
import { useNavigate } from 'react-router-dom'
import FlipkartPage from './FlipkartPage'
import GroceryPage from './GroceryPage'
import { display } from '@mui/system'
const CartList = () => {

  const [cart,setCart] = useState(true)
  const cartHandler = () => {
    setCart(true)
    setGrocery(false)
    console.log(!cart)
  }

  const [grocery,setGrocery] = useState(false)
  const groceryHandler = () => {
    setGrocery(true)
    setCart(false)
    console.log(!grocery)
  }
  return (
    <div className={classes.Cart_List}>
      <div className={classes.top_ctn}>
        <div className={classes.topCtn_left}>
          <h3 className={classes.top_header} onClick={cartHandler}>Flipkart</h3>
        </div>
        <div className={classes.topCtn_right}>
          <h3 className={classes.top_header} onClick={groceryHandler}>Grocery</h3>
        </div>
      </div>
      <div className={classes.bottom_ctn}>
       
        {
          cart && <FlipkartPage />
        }
        {
          grocery && <GroceryPage /> 
        }
      </div>
    </div>
  )
}

export default CartList
