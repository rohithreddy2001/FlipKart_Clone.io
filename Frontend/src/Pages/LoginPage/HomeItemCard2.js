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
    <div className={styles.item_cardTwo}>
            <div className={styles.card_top2}>
                <img className={styles.item_img2} src={val.img} alt="img not found"></img>
            </div>

            <div className={styles.card_bottom2}>
                
                <h3 className={styles.brand_name2}>{val.Brand}</h3>
                <h8 className={styles.price2}>₹ {val.Price}</h8>
                <h8 className={styles.rating2}>{val.Rating}</h8>
                
                <div className={styles.cart_btn2}>
                    <button className={styles.add_btn2} onClick={cartHandler}>Add to cart</button>
                    <button className={styles.buy_btn2}>Buy Now</button>
                </div>
            </div>

        </div>
  )
}

export default HomeItemCard
