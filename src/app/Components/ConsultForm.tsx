import React from 'react'
import Image from 'next/image'

const ConsultForm = () => {
  return (
    <>

      <div className='bg-gray-200 grid grid-cols-2 gap-4 p-10 rounded'>

        <form action="">

          <h3 className='text-black text-center'>Coordina una entrevista de admisión</h3>     

            <div className='mb-6'>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" placeholder="Juan" required />
            </div>

            <div className='mb-6'>
              <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-700">Apellido</label>
              <input type="text" id="lastname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" placeholder="Pérez" required />
            </div>

            <div className='mb-6'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Correo</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" placeholder="tucorreo@gmail.com" required />
            </div>

            <div className='mb-6'>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Teléfono</label>
              <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" placeholder="+123 456 789" required />
            </div>

            <div className='mb-6'>
              <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postulo a nivel:</label>
              <select id="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option>Guardería</option>
                <option>Jardín de Infantes</option>
                <option>Nivel Primario</option>
              </select>
            </div>

            <div className='mb-6'>                
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
              <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba aquí su mensaje" required></textarea>
            </div>

            <div className='mb-6 flex justify-center'>
              <button type='submit' className='text-white bg-[#1999FA] font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Enviar</button>
            </div>

        </form>

        <div>
          <Image src={''} alt='' width={0} height={0}></Image>
        </div>

      </div>

    </>
  )
}

export default ConsultForm
