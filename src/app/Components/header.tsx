"use client";

import { Tooltip, Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";
import { Ingresar } from "../Components/ingresar";
import Link from "next/link";
import Image from "next/image";
import logo from "../imagenes/Logo_CreSiendo.png";
import React, { useState } from 'react';

// links del navbar
const links = [{
    label: "Home",
    route: "/",
}, {
    label: "Nosotros",
    route: "/nosotros",
}, {
    label: "Programas",
    route: "/programas",
}, {
    label: "Contacto",
    route: "/contacto",
}];

// funcion para el modal
export function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };


    return (
        <header className="flex h-60 mt-[-30px] bg-white">
        <section className="flex w-4/12 items-center mb-[60px] ">
            <div className="flex justify-center relative right-12">
                <Image src={logo} alt="Logo creciendo" className="w-[65%]" />
            </div>
        </section>
            
            {/* navbar */}
            <section className="flex justify-around w-8/12 p-10">
                <nav>
                    <ul className="flex space-x-4 text-xl border-b-2 border-ccolor04 text-ccolor04 font-bold">
                        {links.map(({ label, route }) => (
                            <li key={route}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Login y registro */}
                <div className="flex place-self-start space-x-8 text-lg">

                    <div>
                        <Tooltip className="flex items-center h-20 w-52 text-center" content="Esta seccion es solo para alumnos registrados" placement="bottom" arrow={false}>
                            <Ingresar />
                        </Tooltip>
                    </div>
                    
                </div>
            </section>
        </header>
    );
}