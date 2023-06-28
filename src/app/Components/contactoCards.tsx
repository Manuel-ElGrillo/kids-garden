"use client";

import { Button, Modal, Card } from "flowbite-react";
import React, { useState } from "react";
import { Contacto } from "../Interfaces/Contacto";
import Image from "next/image";
import imgDirectora from "../imagenes/foto-carnet-fondo-celeste.jpg";

const ContactoCards: React.FC<Contacto> = ({
  nombre,
  cargo,
  imgSrc,
  alt,
  background,
  modalnombre,
  modalcargo,
  modalperiodo,
  modalpuesto,
  modalcontacto,
  modalmail,
}) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <div>
      <section>
        <div className="py-6">
          <Card
            onClick={() => props.setOpenModal("dismissible")}
            className={`max-w-lg text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer ${background}`}
          >
            <section className="flex">
              <section className="w-8/12 indent-4 space-y-8 align-middle">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p className="text-white">{nombre}</p>
                </h5>
                <p className="font-normal text-white">{cargo}</p>
              </section>
              <section className="flex w-4/12 justify-center">
                <Image src={imgSrc} alt={alt} className="w-20" />
              </section>
            </section>
          </Card>

          <Modal
            dismissible
            show={props.openModal === "dismissible"}
            onClose={() => props.setOpenModal(undefined)}
          >
            <Modal.Header className={`flex items-center ${background}`}>
              <div>
                <p>{modalnombre}</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="flex space-y-4">
                <section className="w-5/12">
                  <Image src={imgSrc} alt={alt} className="w-56" />
                </section>
                <section className="w-7/12 flex flex-wrap items-center">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalcargo}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalpuesto}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalperiodo}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalcontacto}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalmail}
                  </p>
                </section>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default ContactoCards;
