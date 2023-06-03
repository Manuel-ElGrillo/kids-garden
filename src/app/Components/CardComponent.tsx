import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cards } from '../Interfaces/Cards'

const CardComponent: React.FC<Cards> = ({title, text, link, imgSrc, alt}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href={link}>+ Info</Link>
        <Image src={imgSrc} alt={alt}></Image>
    </div>
  )
}

export default CardComponent
