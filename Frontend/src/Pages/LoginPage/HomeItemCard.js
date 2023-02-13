import React from 'react'
import styles from './login_page.module.css'
import { useNavigate } from 'react-router-dom'

function HomeItemCard({val}) {
    let navigate = useNavigate()
    const cartHandler =() => {
        console.log("clicked")
        navigate('/cartPage')
    }

  return (
    <div className={styles.item_card}>
            <div className={styles.card_top}>
                <img className={styles.item_img} src={val.img} alt="img not found"></img>
            </div>

            <div className={styles.card_bottom}>
                
                <h3 className={styles.brand_name}>{val.Brand}</h3>
                <h8 className={styles.price}>₹ {val.Price}</h8>
                <h8 className={styles.rating}>{val.Rating}</h8>
                
                <div className={styles.cart_btn}>
                    <button className={styles.add_btn} onClick={cartHandler}>Add to cart</button>
                    <button className={styles.buy_btn}>Buy Now</button>
                </div>
            </div>

        </div>
  )
}

export default HomeItemCard
