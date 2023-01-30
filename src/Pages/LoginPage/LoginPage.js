// import SearchIcon from "@material-ui/icons/Search";
import Card from '../../components/Card/Card'
import styles from './login_page.module.css'
import flipkart from './flipkart.png'
import { useState } from 'react'
import Electronics from './Electronics'
import ToysSection from './ToysSection'
import ItemsPage from './itemsPage/GadgetsPage'
import ItemCard from './itemsPage/ItemCard'
import google_img from '../LoginPage/itemsPage/google.png'
import oneplus_img from '../LoginPage/itemsPage/oneplus.png'
import vivo_img from '../LoginPage/itemsPage/vivo.png'
import HomeItemCard from './HomeItemCard'

function LoginPage({electronicMessage}){
    const [toyMsg,setToyMsg] = useState(false)
    const toyMessage = () => {
        setToyMsg(!toyMsg)
    }

    const Items = [
        
        {
          Id: 1,
          Brand: 'Vivo 14',
          Price: "18,999",
          Rating: "⭐⭐⭐⭐ 2,200+ ratings",
          img:vivo_img
        },
        {
          Id: 2,
          Brand: 'One Plus Never Settle',
          Price: "40,999",
          Rating: "⭐⭐⭐⭐⭐ 3,500+ ratings",
          img:oneplus_img
        },
        {
          Id: 3,
          Brand: 'Google Pixel',
          Price: "38,999",
          Rating: "⭐⭐⭐⭐⭐ 6,500+ ratings",
          img:google_img
        }
        
    ]
    

    return(
        <div className={styles.login_page}>
                <div className={styles.Top}>
                    <div className={styles.Top_Left}>
                    <h2 className={styles.left_div}>Best Of Electronics</h2> <br />
                    <button className={styles.view_top} onClick={electronicMessage}>VIEW ALL</button>
                    </div>
                    <div className={styles.Top_Right}>
                        {
                            Items.map(item => <HomeItemCard key={item.Id} val={item} />)
                        }
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Bottom_Left}>
                        <h2 className={styles.left_div}>Beauty, Food, Toys & more..</h2> <br />
                        <button className={styles.view_bottom} onClick={toyMessage}>VIEW ALL</button>
                        {
                            toyMsg ? <ToysSection /> : null
                        }
                    </div>
                    <div className={styles.Bottom_Right}>
                        bottom right
                    </div>
                </div>
            </div>
    )
}


export default LoginPage