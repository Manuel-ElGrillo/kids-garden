"use client";
import { Button, Modal, Card } from "flowbite-react";
import React, { useState } from "react";
import { Contacto } from "../Interfaces/Contacto";
import Image from "next/image";

const ContactoCards: React.FC<Contacto> = ({
  nombre,
  cargo,
  imgSrc,
  alt,
  titleBackground,
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
    <div className="py-5">
      <Card
        onClick={() => props.setOpenModal("dismissible")}
        className="max-w-lg text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-point bg-purple-400 dark:bg-purple-600"
      >
        <section className="flex">
          <section className="w-8/12 indent-4 space-y-8 align-middle">
            <h5 className="text-xl font-bol-tight text-gray-900 dark:text-white">
              <p>{nombre}</p>
            </h5>
            <p>{cargo}</p>
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
        <Modal.Header className={`flex items-center ${titleBackground}`}>
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
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-500">
                {modalcargo}
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-500">
                {modalpuesto}
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-500">
                {modalperiodo}
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-500">
                {modalcontacto}
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-500">
                {modalmail}
              </p>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactoCards;
