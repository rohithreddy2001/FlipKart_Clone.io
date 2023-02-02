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
import shirt1 from '../LoginPage/itemsPage/shirt-1.jpg'
import shirt2 from '../LoginPage/itemsPage/shirt-2.jpg'
import shirt3 from '../LoginPage/itemsPage/shirt-3.jpg'
import shirt4 from '../LoginPage/itemsPage/shirt-4.jpg'
import shirt5 from '../LoginPage/itemsPage/shirt-5.jpg'
import shirt6 from '../LoginPage/itemsPage/shirt-6.jpg'
import shoe1 from '../LoginPage/itemsPage/shoe-1.jpg'
import shoe2 from '../LoginPage/itemsPage/shoe-2.jpg'
import shoe3 from '../LoginPage/itemsPage/shoe-3.jpg'
import shoe4 from '../LoginPage/itemsPage/shoe-4.jpg'
import shoe5 from '../LoginPage/itemsPage/shoe-5.jpg'
import shoe6 from '../LoginPage/itemsPage/shoe-6.jpg'

import oneplus_img from '../LoginPage/itemsPage/oneplus.png'
import vivo_img from '../LoginPage/itemsPage/vivo.png'
import dell_img from './itemsPage/dell.png'
import HomeItemCard from './HomeItemCard'
import { useNavigate } from 'react-router-dom'
import HomeItemCard2 from './HomeItemCard2'

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

    const shirts = [
        {
            Id: 1,
            Brand: 'WROGN Men Printed Casual Brown Shirt',
            Price: "1,099",
            Rating: "4.1⭐ (104)",
            img: shirt1
          },
          {
            Id: 2,
            Brand: 'WROGN Men Printed Casual Blue Shirt',
            Price: "1,499",
            Rating: "4.3⭐ (134)",
            img: shirt2
          },
          {
            Id: 3,
            Brand: 'WROGN Men Printed Casual Maroon Shirt',
            Price: "999",
            Rating: "4.0⭐ (114)",
            img: shirt3
          },
          {
            Id: 4,
            Brand: 'WROGN Men Printed Casual Green Shirt',
            Price: "919",
            Rating: "3.5⭐ (111)",
            img: shirt4
          },
          {
            Id: 5,
            Brand: 'WROGN Men Printed Casual Red Shirt',
            Price: "949",
            Rating: "3.8⭐ (131)",
            img: shirt5
          },
          {
            Id: 6,
            Brand: 'WROGN Men Printed Casual Light Green Shirt',
            Price: "919",
            Rating: "3.7⭐ (147)",
            img: shirt6
          }

    ]

    const shoes = [
        {
            Id: 1,
            Brand: 'Xtoon Casual shoes Casuals For Men',
            Price: "1,499",
            Rating: "4.1⭐ (144)",
            img: shoe1
          },
          {
            Id: 2,
            Brand: 'Sparx SD-323 Casuals For Men',
            Price: "2,499",
            Rating: "4.5⭐ (334)",
            img: shoe2
          },
          {
            Id: 3,
            Brand: 'AJANTA Casual Loafers For Men',
            Price: "1,999",
            Rating: "4.0⭐ (214)",
            img: shoe3
          },
          {
            Id: 4,
            Brand: 'Sparx SM-734 Sneakers For Men',
            Price: "1,919",
            Rating: "4.3⭐ (111)",
            img: shoe4
          },
          {
            Id: 5,
            Brand: 'AJANTA Casual Loafers For Men',
            Price: "1,499",
            Rating: "3.8⭐ (131)",
            img: shoe5
          },
          {
            Id: 6,
            Brand: "Roadster Men's White Faux Leather Sneakers For Men",
            Price: "1,999",
            Rating: "4.2⭐ (137)",
            img: shoe6
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

                <div className={styles.full_row_ctn}>
                    <div className={styles.middle_top}>
                        <h4>Suggested for You</h4>
                        <button className={styles.view_btn}>VIEW ALL</button>
                    </div>
                    <div className={styles.middle}>
                        {
                            shirts.map(item => <HomeItemCard2 key={item.Id} val={item} />)
                        }
                    </div>
                </div>

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
                
                <div className={styles.full_row_ctn}>
                    <div className={styles.middle_top}>
                        <h4>Recommended Items</h4>
                        <button className={styles.view_btn}>VIEW ALL</button>
                    </div>
                    <div className={styles.middle}>
                        {
                            shoes.map(item => <HomeItemCard2 key={item.Id} val={item} />)
                        }
                    </div>
                </div>
            </div>
    )
}


export default HomePage