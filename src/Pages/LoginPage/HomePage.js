// import SearchIcon from "@material-ui/icons/Search";
import SignInPage from '../../components/Card/SignInPage'
import styles from './login_page.module.css'
import flipkart from './flipkart.png'
import { useState } from 'react'
import Electronics from './Electronics'
import ToysSection from './ToysSection'
import ItemsPage from './itemsPage/GadgetsPage'
import ItemCard from './itemsPage/ItemCard'
import google_img from '../LoginPage/itemsPage/google.png'
import bat_img from '../LoginPage/itemsPage/bat.png'
import gym_img from '../LoginPage/itemsPage/gym.png'
import car_img from '../LoginPage/itemsPage/car.png'
import oneplus_img from '../LoginPage/itemsPage/oneplus.png'
import vivo_img from '../LoginPage/itemsPage/vivo.png'
import dell_img from './itemsPage/dell.png'
import HomeItemCard from './HomeItemCard'
import { useNavigate } from 'react-router-dom'

function HomePage(){


    let navigate = useNavigate()
    const gadgetHandler =() => {
        navigate('/gadgetsPage')
    }

    const toysHandler =() => {
        navigate('/toysPage')
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
          Brand: 'Dell Inspiron 15',
          Price: "79,999",
          Rating: "⭐⭐⭐⭐⭐ 13,500+ ratings",
          img:dell_img
        },
        {
          Id: 3,
          Brand: 'Google Pixel',
          Price: "38,999",
          Rating: "⭐⭐⭐⭐⭐ 6,500+ ratings",
          img:google_img
        }
        
    ]

    const data = [
        {
            Id: 1,
            Brand: 'MRF Bat',
            Price: "14,999",
            Rating: "⭐⭐⭐⭐⭐ 12,200+ ratings",
            img:bat_img
          },
          {
            Id: 2,
            Brand: 'Remote Control Car',
            Price: "9,999",
            Rating: "⭐⭐⭐⭐⭐ 12,500+ ratings",
            img:car_img
          },
          {
            Id: 3,
            Brand: 'GYM Essentials',
            Price: "24,999",
            Rating: "⭐⭐⭐⭐⭐ 5,500+ ratings",
            img:gym_img
          }
    ]
    

    return(
        <div className={styles.login_page}>

                <div className={styles.Top}>
                    <div className={styles.Top_Left}>
                    <h2 className={styles.left_div}>Best Of Electronics</h2> <br />
                    <button className={styles.view_top} onClick={gadgetHandler}>VIEW ALL</button>
                    </div>
                    <div className={styles.Top_Right}>
                        {
                            Items.map(item => <HomeItemCard key={item.Id} val={item} />)
                        }
                    </div>
                </div>
                {/* {
                    login && <SignInPage loginHandler={loginHandler} />
                } */}

                <div className={styles.Bottom}>
                    <div className={styles.Bottom_Left}>
                        <h2 className={styles.left_div}>Toys & More..</h2> <br />
                        <button className={styles.view_bottom} onClick={toysHandler} >VIEW ALL</button>
                        
                    </div>
                    <div className={styles.Bottom_Right}>
                        {
                            data.map(item => <HomeItemCard key={item.Id} val={item}/>)
                        }
                    </div>
                </div>
            </div>
    )
}


export default HomePage