import Image from 'next/image'
import CardComponent from './Components/CardComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <CardComponent
        title='Titulo 1'
        text='Texto 1'
        link='/nosotros'
        imgSrc=''
        alt=''
        bgColor=''/>

    </main>
  )
}
