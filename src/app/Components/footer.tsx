"use client";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGlobeAmericas } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logochico from "../imagenes/Logo_miniatura.png";

export function Footer() {
  return (
    <footer className="flex justify-around items-center w-screen text-white h-60 bg-[#401A70]">
      <section className="space-y-4 text-2xl">
        <div className="space-y-2 text-center">
          <p>Calle 501 e/ 28 y 30 - Gonnet - La Plata</p>
          <p>cre-siendo@educacion.org.ar</p>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/EducacionBA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/educacion.ar/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="w-10 h-10" />
          </a>
          <a
            href="https://twitter.com/ministerioeduc?lang=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="w-10 h-10" />
          </a>
          <a
            href="https://www.argentina.gob.ar/educacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGlobeAmericas className="w-10 h-10" />
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center text-2xl">
        <Link
          href="../contacto"
          className="font-semibold text-white-700 hover:underline dalg:text-white-500"
        >
          Preguntas Frecuentes
        </Link>
      </section>

      <section className="flex flex-col items-center text-2xl">
        <Link href="/">
          <Image
            src={logochico}
            alt="Logo creciendo"
            className="flex w-full mx-auto"
          />
        </Link>
      </section>
    </footer>
  );
}
