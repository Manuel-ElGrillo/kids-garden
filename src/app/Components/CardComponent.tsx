import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cards } from '../Interfaces/Cards'

const CardComponent: React.FC<Cards> = ({title, text, link, imgSrc, alt, bg}) => {
  return (
    <div className={bg}>
      <h3 className='mb-2 text-center text-2xl font-bold tracking-tight text-white'>{title}</h3>
      <p className='mb-3 font-normal text-black text-center'>{text}</p>
      <div className='block text-center'>
        <Link href={link} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 bg-white rounded-lg'>+ Info</Link>
      </div>
      <div className='flex justify-center pt-5'>
        <Image src={imgSrc} alt={alt} width={120} height={120}></Image>
      </div>
    </div>
  )
}

export default CardComponent
