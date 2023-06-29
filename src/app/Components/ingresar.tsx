"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Image from "next/image";
import logochico from "../imagenes/Logo_miniatura.png";
import imagenlogin from "../imagenes/pngwing.com (3).png";

export function Ingresar() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <div>
      <Button onClick={() => props.setOpenModal("form-elements")}>
        Ingresar
      </Button>

      <Modal
        show={props.openModal === "form-elements"}
        size="4xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <div className="flex justify-between bg-cover bg-center bg-[url('https://imageup.me/images/90ab0e75-8a67-4b9c-9222-e9c538a0d3ed.jpeg')]">
          <section>
            <div className="relative">
              <Image src={logochico} alt="Logo creciendo" className="p-4" />
              <Image
                src={imagenlogin}
                alt="Imagen de ingreso"
                className="-bottom-0 w-3/4"
              />
            </div>
          </section>
          <section className="w-1/2 justify-end">
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Ingresa a la plataforma de alumno
                </h3>
                <div>
                  <div>
                    <Label htmlFor="text" value="Nombre del alumno:" />
                  </div>
                  <TextInput id="text" placeholder="nombre completo" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Tu email:" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Numero de legajo" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="w-full">
                  <Button>Ir a la plataforma</Button>
                </div>
              </div>
            </Modal.Body>
          </section>
        </div>
      </Modal>
    </div>
  );
}
