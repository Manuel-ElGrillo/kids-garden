import React from 'react'
import Image from 'next/image'
import { Cards } from '../Interfaces/Cards'
import styles from "../styles/Cards.module.css"

const CardComponent: React.FC<Cards> = ({ title, text, imgSrc, alt, bg, backText, backTitle }) => {
  return (
    <div className={styles["card-flip"]}>
      <div className={styles["content-flip"]}>

        {/* Cara frontal */}
        <div className={bg}>
          <h3 className='mb-2 text-center text-xl font-sans tracking-tight text-white'>{title}</h3>
          <p className='mb-3 font-normal text-black text-center'>{text}</p>
          <div className='block text-center'>
          </div>
          <div className='flex justify-center pt-5'>
            <Image src={imgSrc} alt={alt} width={90} height={90}></Image>
          </div>
        </div>

        {/* Cara trasera */}
        <div className={bg}>
          <h3 className='mb-2 text-center text-xl font-sans tracking-tight text-white'>{backTitle}</h3>
          <div className='flex justify-center pt-1 pb-3'>
            <Image src={imgSrc} alt={alt} width={50} height={50}></Image>
          </div>
          <div className='justify-center'>
            <p className='mb-3 font-light text-black text-center'>{backText}</p>
          </div>
        </div>
      
      </div>
    </div>

  )
}

export default CardComponent



