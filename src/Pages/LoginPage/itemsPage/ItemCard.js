import React from 'react'
import classes from './item_card.module.css'

const ItemCard = ({items}) => {
        console.log(items.Brand)
    return(
        <div className={classes.i_card}>
            <div className={classes.item_top}>
                <img className={classes.item_img} src={items.img} alt="img not found"></img>
            </div>

            <div className={classes.item_bottom}>
                
                <h5 className={classes.brand_name}>{items.Brand}</h5>
                <h5 className={classes.price}>₹ {items.Price}</h5>
                <h5 className={classes.rating}>{items.Rating}</h5>
                
                <div className={classes.cart_btn}>
                    <button className={classes.add_btn}>Add to cart</button>
                    <button className={classes.buy_btn}>Buy Now</button>
                </div>
            </div>

        </div>
        
    )
}

export default ItemCard
