import Image from 'next/image'
import CardComponent from './Components/CardComponent'
import ConsultForm from './Components/ConsultForm'
import Main from './Components/Main'

export default function Home() {

  return (
    <div className="bg-white text-black h-[1950px]">
      <Main />

      <main className="flex min-h-screen flex-col items-center justify-between p-24 relative top-[20px] bg-[url('../../public/img/bgHome.png')] bg-no-repeat ">

        <section className="w-[1200px] h-[120px] mb-10">
          <p className=" relative top-[-80px] leading-9 left-2  font-sans font-normal font-style: italic text-[17px] flex text-justify px-6">
            Creemos que el nivel inicial es para los niños su primera experiencia social que genera huellas relevantes para su desarrollo personal y su trayectoria
            educativa. Es la etapa en donde se sientan las bases del desarrollo cognitivo, emocional y social. Buscamos construir un espacio en donde se sientan
            cómodos, felices y por sobretodo amados.</p>
          <p className="relative top-[-65px] leading-8 left-2 font-sans font-semibold font-style: italic text-[17px] flex text-justify px-6">
            Es por ello que trabajamos con gran afán para que nuestro jardín sea un lugar de seguridad, protección, proximidad y amor como lo son su casa y su familia.
          </p>
        </section>

        <section className='flex'>
          <CardComponent
            title='Estrellitas'
            text={<>Desarrollo temprano de los niños de 45 días a 2 años</>}
            imgSrc='/img/rings.png'
            alt='Imagen de juguete para niños'
            bg='bg-[#1999FA] p-6 rounded-lg shadow space-x-0.5'
            backTitle='Estrellitas'
            backText='En esta etapa desarrollamos la habilidad de comunicarse y expresar sus primeras palabras' />

          <CardComponent
            title='Pequeñitos'
            text={<>Actividades para <br /> niños <br /> a partir de 2 años</>}
            imgSrc='/img/boat.png'
            alt='Imagen de un barco de juguete'
            bg='bg-[#9DC620] max-w-[300px] p-6 rounded-lg shadow space-x-0.5'
            backTitle='Pequeñitos'
            backText='En esta etapa potenciamos las habilidades de interacción mediante actividades grupales' />

          <CardComponent
            title='Primeros Pasos'
            text={<>Actividades para <br /> niños <br /> a partir de 3 años</>}
            imgSrc='/img/blocks.png'
            alt='Imagen de cubos de juguete'
            bg='bg-[#FF7223] max-w-[300px] p-6 rounded-lg shadow space-x-0.5'
            backTitle='Primeros Pasos'
            backText='En esta etapa brindamos las primeras experiencias fuera de la Institución' />

          <CardComponent
            title='Pequeños Gigantes'
            text={<>Actividades para <br /> niños <br /> de 4 a 6 años</>}
            imgSrc='/img/children.png'
            alt='Imagenes de niños de caricatura'
            bg='bg-[#C81FA0] max-w-[300px] p-6 rounded-lg shadow space-x-0.5'
            backTitle='Pequeños Gigantes'
            backText='En esta etapa el eje esta centrado en las habilidades grupales y la inclusión didáctica ' />
        </section>

        <section>
          <h3 className='font-[Tahoma] italic font-semibold text-xl mt-12'>INSCRIPCIONES CICLO 2024 ABIERTAS</h3>
        </section>

        <section className=''>
          <ConsultForm />
        </section>

        <section className="flex items-center justify-center relative top-[90px] font-['Tahoma']">
          <div className="text-center">
            <h2 className="text-xl font-bold">NOS TRANSFORMAMOS DÍA A DÍA</h2>
            <p className="text-lg">Frente al continuo cambio de paradigmas, en tiempos en que todo parece acelerarse y sólo importa lo inmediato.
             <br />En <b className="font-['Tahoma']">CreSiendo</b> proponemos “hacer” para volver a crecer.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
