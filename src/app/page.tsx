import Image from 'next/image'
import CardComponent from './Components/CardComponent'
import ConsultForm from './Components/ConsultForm'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className='flex'>

        <CardComponent
          title='Estrellitas'
          text={<>Desarrollo temprano de los niños de 45 días a 2 años</>}
          imgSrc='/img/rings.png'
          alt='Imagen de juguete para niños'
          bg='bg-[#1999FA] max-w-[300px] p-6 rounded-lg shadow space-x-0.5'
          backTitle='Estrellita'
          backText='En esta etapa desarrollamos la habilidad de comunicarse libremente y expresar sus primeras palabras' />

        <CardComponent
          title='Pequeñitos'
          text={<>Actividades para <br /> niños a partir de 2 años</>}
          imgSrc='/img/boat.png'
          alt='Imagen de un barco de juguete'
          bg='bg-[#9DC620] max-w-[300px] p-6 rounded-lg shadow space-x-0.5' 
          backTitle='Pequeñitos'
          backText='En esta etapa potenciamos las habilidades de interacción mediante actividades grupales'/>

        <CardComponent
          title='Primeros Pasos'
          text={<>Actividades para niños <br /> a partir de 3 años</>}
          imgSrc='/img/blocks.png'
          alt='Imagen de cubos de juguete'
          bg='bg-[#FF7223] max-w-[300px] p-6 rounded-lg shadow space-x-0.5' 
          backTitle='Primeros Pasos'
          backText='En esta etapa brindamos las primeras experiencias fuera de la Institución'/>

        <CardComponent
          title='Pequeños Gigantes'
          text={<>Grupo para niños <br /> de 4 a 6 años</>}
          imgSrc='/img/children.png'
          alt='Imagenes de niños de caricatura'
          bg='bg-[#C81FA0] max-w-[300px] p-6 rounded-lg shadow space-x-0.5'
          backTitle='Pequeños Gigantes'
          backText='En esta etapa el eje esta centrado en las habilidades grupales y la inclusión didáctica ' />

      </section>

      <section className='w-[90%] my-6'>
        <ConsultForm />
      </section>

    </main>
  )
}
