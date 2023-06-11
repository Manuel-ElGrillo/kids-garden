"use client";
import { Tooltip, Button, Modal } from "flowbite-react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';
import logochico from "../imagenes/Logo_miniatura.png";

export function Footer() {
    
    return (
        <footer className="flex justify-around items-center w-screen h-60 bg-[#C81FA0]">
            <section className='space-y-4'>
                <div className='space-y-2'>
                    <Image src={logochico} alt="Logo creciendo" className="w-2/3" />
                    <p>Calle 501 - Gonnet - La Plata</p>
                    <p className='text-xl'>cre-siendo@educacion.org.ar</p>
                </div>
                <div className="flex justify-between">
                    <a href="https://www.facebook.com/creciendo" target="_blank" rel="noopener noreferrer"></a>
                    <BsFacebook className='w-10 h-10' />
                    <a href="https://www.instagram.com/creciendo" target="_blank" rel="noopener noreferrer"></a>
                    <BsInstagram className='w-10 h-10' />
                    <a href="https://www.twitter.com/creciendo" target="_blank" rel="noopener noreferrer"></a>
                    <BsTwitter className='w-10 h-10' />
                    <a href="https://www.whatsapp.com/creciendo" target="_blank" rel="noopener noreferrer"></a>
                    <BsWhatsapp className='w-10 h-10' />
                </div>
            </section>

            <Tooltip content="Tooltip content" placement="bottom">
                <Button>
                    Default tooltip
                </Button>
            </Tooltip>
            
            <section className="flex flex-col items-center">
                <h2>
                    AYUDA
                </h2>
                <button>
                    Preguntas frecuentes
                </button>
                <button>
                    Legal y privacidad
                </button>
                <button>
                    Cliente
                </button>
            </section>
        </footer>
    )
}