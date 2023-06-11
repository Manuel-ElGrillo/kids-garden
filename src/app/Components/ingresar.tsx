'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

export function Ingresar() {
    
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <div>
        <Button onClick={() => props.setOpenModal('form-elements')}>Ingresar</Button>
        <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ingresa a la plataforma de alumno</h3>
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
              <TextInput id="email" placeholder="name@company.com" required />
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
        </Modal>
    </div>
  );
}