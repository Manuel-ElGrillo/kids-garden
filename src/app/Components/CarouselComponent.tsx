"use client";

import { Carousel } from "flowbite-react"
import Image from "next/image"
import jardin from "../../../public/img/imgCarrousel/jardin.png"
import manos from "../../../public/img/imgCarrousel/manos.png"
import ninos from "../../../public/img/imgCarrousel/ninos.png"
import sala from "../../../public/img/imgCarrousel/sala.png"
import styles from "../styles/Carousel.module.css"


const CarouselComponent = () => {
    return (
        <Carousel
            slideInterval={8000}
            className="bg-[#77EBB3] relative bottom-6"
        >
            <div className="flex items-center justify-between mx-[70px]">
                <div className="flex-col relative left-[50px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Respetamos el proceso particular de cada niño/a <br />
                            y su familia, reconociendo que todos somos únicos, <br /> pero NO los únicos.</>}
                    </p>
                </div>
                <div>
                    <Image
                        className={styles['carousel-img']}
                        alt="..."
                        src={manos}
                    />
                </div>
                <button className={styles['carousel-buttom']}>
                    Consultanos
                </button>
            </div>

            <div className="flex items-center justify-between mx-[70px]">
                <div className="flex-col relative left-[50px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Frente al contínuo cambio de paradigmas,<br /> en
                            tiempos en que todo parece acelerarse y sólo importa <br />lo inmediato en “Cre-Siendo” proponemos “hacer”
                            <br /> para volver a crecer...</>}
                    </p>
                </div>
                <Image
                    className={styles['carousel-img']}
                    alt="..."
                    src={jardin}
                />
                <button className={styles['carousel-buttom']}>
                    Consultanos
                </button>
            </div>

            <div className="flex items-center justify-between mx-[70px]">
                <div className="flex-col relative left-[50px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>...acompañando a las familias al momento de <br />
                            decidir el camino de la educación para sus hijos.</>}
                    </p>
                </div>
                <Image
                    className={styles['carousel-img']}
                    alt="..."
                    src={ninos}
                />
                <button className={styles['carousel-buttom']}>
                    Consultanos
                </button>
            </div>

            <div className=" flex items-center justify-between mx-[70px]">
                <div className="flex-col relative left-[50px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Con espacios adaptados exclusivamente para la <br />
                            necesidad y edad de cada niño/a. En donde <br /> fomentamos la autonomia y sentido de libertad.</>}
                    </p>
                </div>
                <Image
                    className={styles['carousel-img']}
                    alt="..."
                    src={sala}
                />
                <button className={styles['carousel-buttom']}>
                    Consultanos
                </button>
            </div>
        </Carousel>

    )
}

export default CarouselComponent

