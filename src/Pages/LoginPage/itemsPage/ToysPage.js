import React from 'react'
import ItemCard from './ItemCard'
import bat_img from './bat.png'
import gym_img from './gym.png'
import cycle_img from './cycle.png'
import football_img from './football.png'
import helmet_img from './helmet.png'
import microphone_img from './microphone.png'
import perfumes_img from './perfumes.png'
import badminton_img from './badminton.png'
import car_img from './car.png'
import classes from './item_card.module.css'

const ToysPage = () => {


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
          },
          {
            Id: 4,
            Brand: 'Badminton Stick',
            Price: "4,999",
            Rating: "⭐⭐⭐⭐⭐ 2,500+ ratings",
            img:badminton_img
          },
          {
            Id: 5,
            Brand: 'Sports Cycle',
            Price: "7,999",
            Rating: "⭐⭐⭐⭐⭐ 1,500+ ratings",
            img:cycle_img
          },
          {
            Id: 6,
            Brand: 'FootBall (NIVIA)',
            Price: "3,999",
            Rating: "⭐⭐⭐⭐ 1,000+ ratings",
            img:football_img
          },
          {
            Id: 7,
            Brand: 'Helmet (ISI Verified)',
            Price: "2,999",
            Rating: "⭐⭐⭐⭐⭐ 2,500+ ratings",
            img:helmet_img
          },
          {
            Id: 8,
            Brand: 'Microphone Mic',
            Price: "2,999",
            Rating: "⭐⭐⭐⭐⭐ 1,500+ ratings",
            img:microphone_img
          },
          {
            Id: 9,
            Brand: 'One8 Perfumes',
            Price: "2,999",
            Rating: "⭐⭐⭐⭐⭐ 15,500+ ratings",
            img:perfumes_img
          }
    ]

  return (
    <div className={classes.toy_page}>
      {
        data.map(item => <ItemCard key={item.Id} items={item}/>)
      }
    </div>
  )
}

export default ToysPage
