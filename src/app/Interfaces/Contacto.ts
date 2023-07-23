import Image, { StaticImageData } from "next/image";

export interface Contacto {
    nombre: string,
    cargo: string,
    imgSrc: StaticImageData,
    alt: string,
    titleBackground: string,
    modalnombre: string,
    modalcargo: string,
    modalperiodo: string,
    modalpuesto: string,
    modalcontacto: string,
    modalmail: string,
}