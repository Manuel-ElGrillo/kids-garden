import Image from 'next/image'
import CardComponent from './Components/CardComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className='flex'>

        <CardComponent
          title='Estrellitas'
          text='Desarrollo temprano de los niños de 45 días a 2 años'
          link='/nosotros'
          imgSrc=''
          alt=''
          bg='bg-[#1999FA] max-w-sm p-6 rounded-lg shadow basis-1/4 mx-4' />

        <CardComponent
          title='Pequeñitos'
          text='Actividades para niños a partir de 2 años'
          link='/nosotros'
          imgSrc=''
          alt=''
          bg='bg-[#9DC620] max-w-sm p-6 rounded-lg shadow basis-1/4 mx-4' />

        <CardComponent
          title='Primeros Pasos'
          text='Actividades para niños a partir de 3 años'
          link='/nosotros'
          imgSrc=''
          alt=''
          bg='bg-[#FF7223] max-w-sm p-6 rounded-lg shadow basis-1/4 mx-4' />

        <CardComponent
          title='Pequeños Gigantes'
          text='Grupo para niños de 4 a 6 años'
          link='/nosotros'
          imgSrc=''
          alt=''
          bg='bg-[#C81FA0] max-w-sm p-6 rounded-lg shadow basis-1/4 mx-4' />

      </section>

    </main>
  )
}
