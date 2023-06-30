"use client";

import { Carousel } from "flowbite-react"
import Image from "next/image"
import jardin from "../../../public/img/imgCarrousel/jardin.png"
import manos from "../../../public/img/imgCarrousel/manos.png"
import ninos from "../../../public/img/imgCarrousel/ninos.png"
import sala from "../../../public/img/imgCarrousel/sala.png"
import manitos from "../../../public/img/imgCarrousel/manitos.png"
import styles from "../styles/Carousel.module.css"



const CarouselComponent = () => {
    return (
        <Carousel
            slideInterval={7000}
            className="no-drag"
        >
            <div className="flex items-center justify-center mx-[70px]">
                <div className="flex-col relative left-[-200px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Respetamos el proceso particular de cada niño/a <br />
                            y su familia, reconociendo que todos somos únicos, <br /> pero NO los únicos.</>}
                    </p>
                    <div>
                        <Image
                            className={styles['carousel-subimg']}
                            alt="..."
                            src={manitos}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        className={styles['carousel-img']}
                        alt="..."
                        src={manos}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mx-[70px]">
                <div className="flex-col relative left-[-200px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Frente al contínuo cambio de paradigmas,<br /> en
                            tiempos en que todo parece acelerarse y sólo importa <br />lo inmediato en “Cre-Siendo” proponemos “hacer” para volver a crecer...</>}
                    </p>
                    <div>
                        <Image
                            className={styles['carousel-subimg']}
                            alt="..."
                            src={manitos}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        className={styles['carousel-img']}
                        alt="..."
                        src={jardin}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mx-[70px]">
                <div className="flex-col relative left-[-200px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>...acompañando a las familias al momento de <br />
                            decidir el camino de la educación para sus hijos.</>}
                    </p>
                    <div>
                        <Image
                            className={styles['carousel-subimg']}
                            alt="..."
                            src={manitos}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        className={styles['carousel-img']}
                        alt="..."
                        src={ninos}
                    />
                </div>
            </div>

            <div className=" flex items-center justify-center mx-[70px]">
                <div className="flex-col relative left-[-200px]">
                    <p className={styles['carousel-title']}>
                        {<>Despertar a un genio en un niño</>}
                    </p>
                    <p className={styles['carousel-text']}>
                        {<>Con espacios adaptados exclusivamente para la <br />
                            necesidad y edad de cada niño/a.<br /> En donde fomentamos la autonomia y sentido de libertad.</>}
                    </p>
                    <div>
                        <Image
                            className={styles['carousel-subimg']}
                            alt="..."
                            src={manitos}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        className={styles['carousel-img']}
                        alt="..."
                        src={sala}
                    />
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselComponent

