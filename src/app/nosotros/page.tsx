"use client";

import { Carousel } from "flowbite-react"
import Image from "next/image";
import img1 from "../../../public/img/imgCarrousel/nosotros-carousel-im1.png"
import img2 from "../../../public/img/imgCarrousel/nosotros-carousel-im2.png"
import img3 from "../../../public/img/imgCarrousel/nosotros-carousel-im3.png"
import img4 from "../../../public/img/imgCarrousel/nosotros-carousel-im4.png"
import img5 from "../../../public/img/imgCarrousel/nosotros-carousel-im5.png"
import img6 from "../../../public/img/imgCarrousel/nosotros-carousel-im6.png"
import usImg from "../../../public/img/us-img.png"
import manitos from "../../../public/img/imgCarrousel/manitos.png"
import { UsPageData } from "@/data/UsPage";

const carouselElements = [
  {
    textLine1: 'Protagonistas de su',
    textLine2: 'propia',
    textLine3: 'educación',
    src1: img1,
    src2: img2,
    key: "000"
  },
  {
    textLine1: 'Arte - Ciencias',
    textLine2: 'Cocina',
    textLine3: 'Música - Juegos',
    src1: img3,
    src2: img4,
    key: "001"
  },
  {
    textLine1: 'Arte - Ciencias',
    textLine2: 'Cocina',
    textLine3: 'Música - Juegos',
    src1: img5,
    src2: img6,
    key: "002"
  },
]


export default function Nosotros() {

  return (
    <>
      <div className="mt-[-65px] h-[320px] w-screen">
        <Carousel
          slideInterval={7000}
          className="bg-gradient-to-b from-[#FFD9D9] to-[#FFFFFF]">

          {
            carouselElements.map(element => (
              <div key={element.key}>

                <div className="flex justify-between align-middle px-32">
                  <Image
                    className={''}
                    alt="..."
                    src={element.src1} />
                  <h3 className="text-[#FF2A1D] text-center text-3xl leading-10 font-bold font-style: italic my-auto">
                    {
                      <>
                        {element.textLine1} <br /> {element.textLine2} <br /> {element.textLine3}
                      </>
                    }
                  </h3>
                  <Image
                    className={''}
                    alt="..."
                    src={element.src2} />
                </div>

              </div>
            ))
          }

        </Carousel>
      </div>

      <section className="bg-[url('../../public/img/bgHome.png')] bg-no-repeat bg-white p-24">

        <p className="font-sans font-normal font-style: italic text-justify px-10 py-3">Cresiendo es una Institución Educativa que desde hace más de 15 años forma parte de la Comunidad Educativa Argentina.
        </p>

        <p className="font-sans font-normal font-style: italic text-justify px-10 py-3">
        Nuestro objetivo principal es poder brindar una educación integral que privilegie la construcción de herramientas que le permitan al alumno un aprendizaje significativo y placentero.
        </p>

        <p className="font-sans font-normal font-style: italic text-justify px-10 py-3">
        Valoramos al niño como persona, ser social, con identidad, generador de cambios, intelectual, creativo, capaz y reflexivo. Trabajamos, por lo tanto, desde muy temprana edad para que desarrollando el potencial humano por medio de valores, actitudes, conocimientos, conductas socialmente aceptadas y habilidades, lograremos la formación de un sujeto capaz de tener iniciativa, responsabilidad, compromiso y riqueza en su vida interior.
        </p>



        <p className="font-sans font-semibold font-style: italic text-center px-6">El trabajo en equipo, la planificación pensada, la continua evaluación de la labor, el cuidado de los detalles, el acompañamiento y la contención y el juego como herramienta, son los ingredientes de la tarea cotidiana que nos permitirán que nuestros niños
          al egresar del jardín logren:</p>


        <div className="grid grid-cols-2 my-32 relative">

          <div className="absolute top-[-120px] left-5 rotate-180">
            <Image src={manitos} alt="..." width={240}/>
          </div>

          

          <div>
            <Image 
              src={usImg}
              alt="..."
              className="h-[575px]"/>
          </div>

          <div className="px-5 border border-white bg-gradient-to-t from-[#DAF7E9] to-[#FFFFFF] rounded relative shadow">

          <div className="absolute top-[-160px] right-[-80px]">
            <Image src={manitos} alt="..." width={240}/>
          </div>

            {
              UsPageData.map( item => (
                <ul key={item}>
                  <li className=" list-disc list-inside font-light py-2">
                    {item}
                  </li>
                </ul>
              ))
            }       
          </div>

        </div>

        <div>

          <p className=" text-[#FF2A1D] text-3xl text-center font-style: italic">Tiempos y espacios de libertad para explorar, <br />
            reflexionar y jugar</p>

        </div>

      </section>


    </>
  )
}