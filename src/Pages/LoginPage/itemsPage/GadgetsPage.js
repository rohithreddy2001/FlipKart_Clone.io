import React from 'react'

import ItemCard from './ItemCard'
import classes from './item_card.module.css'
import samsung_img from './samsung.png'
import apple_img from './apple.png'
import oppo_img from './oppo.png'
import vivo_img from './vivo.png'
import mi_img from './mi.png'
import realme_img from './realme.png'
import oneplus_img from './oneplus.png'
import iqoo_img from './iqoo.png'
import google_img from './google.png'
import dell_img from './dell.png'
import hp_img from './hp.png'
import lenovo_img from './lenovo.png'



function GadgetsPage() {

  const data = [
    {
        Id: 1,
        Brand: 'Samsung M31',
        Price: "22,999",
        Rating: "⭐⭐⭐⭐⭐ 11,500+ ratings",
        img:samsung_img
        
    },
    {
        Id: 2,
        Brand: 'Apple 14 Pro Max',
        Price: "1,20,999",
        Rating: "⭐⭐⭐⭐⭐ 20,000+ ratings",
        img:apple_img
    },
    {
        Id: 3,
        Brand: 'Oppo Reno 5 Pro',
        Price: "35,999",
        Rating: "⭐⭐⭐⭐⭐ 2,000+ ratings",
        img:oppo_img
    },
    {
      Id: 4,
      Brand: 'Vivo 14',
      Price: "18,999",
      Rating: "⭐⭐⭐⭐ 2,200+ ratings",
      img:vivo_img
    },
    {
      Id: 5,
      Brand: 'Mi 10 Max',
      Price: "19,999",
      Rating: "⭐⭐⭐⭐ 1,800+ ratings",
      img:mi_img
    },
    {
      Id: 6,
      Brand: 'Realme Narzo 5',
      Price: "20,999",
      Rating: "⭐⭐⭐⭐ 2,500+ ratings",
      img:realme_img
    },
    {
      Id: 7,
      Brand: 'One Plus Never Settle',
      Price: "40,999",
      Rating: "⭐⭐⭐⭐⭐ 3,500+ ratings",
      img:oneplus_img
    },
    {
      Id: 8,
      Brand: 'Google Pixel',
      Price: "38,999",
      Rating: "⭐⭐⭐⭐⭐ 6,500+ ratings",
      img:google_img
    },
    {
      Id: 9,
      Brand: 'Iqoo Z6',
      Price: "29,999",
      Rating: "⭐⭐⭐⭐⭐ 4,500+ ratings",
      img:iqoo_img
    },
    {
      Id: 10,
      Brand: 'Dell Inspiron 15',
      Price: "79,999",
      Rating: "⭐⭐⭐⭐⭐ 13,500+ ratings",
      img:dell_img
    },
    {
      Id: 11,
      Brand: 'Hp Pavilion 14',
      Price: "89,999",
      Rating: "⭐⭐⭐⭐⭐ 11,500+ ratings",
      img:hp_img
    },
    {
      Id: 12,
      Brand: 'Lenovo Idea Pad Slim 5',
      Price: "59,999",
      Rating: "⭐⭐⭐⭐⭐ 8,500+ ratings",
      img:lenovo_img
    },

]



  return (
    <div className={classes.ItemsPage}>
      <div className={classes.page_title}>
        <h2 className={classes.title_}>Best Of Gadgets</h2>
        <h3 className={classes.length_}>{data.length} {data.length === 1 ? "item" : "items"}</h3>
      </div>
      {
        data.map(item => <ItemCard key={item.Id} items={item} />)
      }
    </div>
  )
}

export default GadgetsPage
