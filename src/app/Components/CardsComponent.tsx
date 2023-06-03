import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CardsData } from '@/data/CardsData'

const CardsComponent = () => {
  return (
    <div>
      {
        CardsData.map( card => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <Link href={card.link}>+ Info</Link>
            <Image src={card.imgSrc} alt={card.alt}></Image>
          </div>
        ) )
      }
    </div>
  )
}

export default CardsComponent
