"use client";
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          ESTE ES EL HOME
        </h1>
    </main>
  )
}
