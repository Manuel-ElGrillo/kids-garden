"use client";
import Image from 'next/image'
import React, { useState } from 'react';
  

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          este es el home
        </h1>
      </div>
    </main>
  )
}
