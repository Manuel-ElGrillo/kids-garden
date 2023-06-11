"use client";
import { Tooltip, Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";
import { Ingresar } from './ingresar'
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
        <header className="flex w-full h-60">
            <section className="flex w-4/12 items-center">
                <div className="flex justify-center">
                    <Image src={logo} alt="Logo creciendo" className="w-4/5" />
                </div>
            </section>
            
            {/* navbar */}
            <section className="flex justify-around w-8/12 p-10">
                <nav>
                    <ul className="flex space-x-4 text-lg border-b-2">
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
                    <Button>Registrarse</Button>

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