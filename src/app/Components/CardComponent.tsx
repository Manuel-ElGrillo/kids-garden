import React from 'react'
import Image from 'next/image'
import { Cards } from '../Interfaces/Cards'
import styles from "../styles/Cards.module.css"

const CardComponent: React.FC<Cards> = ({title, text, imgSrc, alt, bg, backText, backTitle}) => {
  return (
    <div className={styles["card-flip"]}>

      {/* Cara frontal */}
      <div className={bg}>
        <h3 className='mb-2 text-center text-2xl font-bold tracking-tight text-white'>{title}</h3>
        <p className='mb-3 font-normal text-black text-center'>{text}</p>
        <div className='block text-center'>
        </div>
        <div className='flex justify-center pt-5'>
          <Image src={imgSrc} alt={alt} width={120} height={120}></Image>
        </div>
      </div>

      {/* Cara trasera */}
      <div className={bg}>
        <h3 className='mb-2 text-center text-2xl font-bold tracking-tight text-white'>{backTitle}</h3>
        <p className='mb-3 font-normal text-black text-center'>{backText}</p>
      </div>
    </div>

  )
}

export default CardComponent



