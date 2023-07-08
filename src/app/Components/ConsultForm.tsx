"use client";
import React,  { useState } from 'react'
import styles from "../styles/Form.module.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const ConsultForm = () => {

  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [levelError, setLevelError] = useState(false);

  const maxCharacters = 255;

  const consultFormAlert = withReactContent(Swal);

  const API_URL: string = "https://kids-garden-backend.onrender.com/inquiry/create";
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();
    
    if (trimmedName === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (trimmedLastName === '') {
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }

    if (trimmedEmail === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (trimmedPhone === '') {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (trimmedMessage === '') {
      setMessageError(true);
    } else if ( trimmedMessage.length >= maxCharacters ) {
      setMessageError(true)
      setMessage(trimmedMessage.slice(0, maxCharacters));
    } else {
      setMessageError(false);
    }
    
    if (level === '') {
      setLevelError(true);
    } else {
      setLevelError(false);
    }

    const formData = {
      clientName: trimmedName,
      clientSurname: trimmedLastName,
      clientEmail: trimmedEmail,
      clientPhone: trimmedPhone,
      clientInquiry: trimmedMessage,
      inquiryType: level,
    };

    try {
      const res = await axios.post( API_URL, formData );

      if (res.status === 201) {
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        setMessage('');
        setLevel('');

        consultFormAlert.fire({
          text: 'Gracias por su consulta. En breve nos contactaremos con usted.',
        });

      } else {
        consultFormAlert.fire({
          text: 'Ha ocurrido un error al enviar el formulario.',
        });
      }
      
    } catch(error) {
      consultFormAlert.fire({
        text: 'Ha ocurrido un error inesperado. Lo sentimos.',
      });
      console.log(error);
    }

    // console.log(trimmedName, trimmedLastName, trimmedEmail, trimmedPhone, trimmedMessage);

    

  }

  const disabledBtn = (): boolean => {
    if (!name && !lastName && !email && !phone && !level && !message) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>

      <div className={styles['form-bg']}>

        <form className={styles['form']} action="" onSubmit={handleSubmit}>

          <h3 className='text-black font-semibold text-left mb-6'>Coordina una entrevista de admisión</h3>    

          <div className='grid grid-cols-2'>
            <div className='mb-6'>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 `}
                placeholder="Juan"
                required
                value={name}
                onChange={(event) => { setName(event.target.value) }}
                pattern="^[a-zA-Z\s]+$"
                title="Solo están permitidas letras en este campo"
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 `}
                placeholder="Pérez"
                required
                value={lastName}
                onChange={(event) => { setLastname(event.target.value) }}
                pattern="^[a-zA-Z\s]+$"
                title="Solo están permitidas letras en este campo"
              />
            </div>

          </div> 

          <div className='grid grid-cols-2'>
          <div className='mb-6'>
              <label 
                htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-700">
                  Correo
              </label>
              <input 
                type="email" 
                id="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" 
                placeholder="tucorreo@gmail.com" 
                required 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                title='El correo electrónico debe tener la extensión válida'
                pattern='^[^\s@]+@[^\s@]+\.(com|net|edu|org|gov|info|biz)$'
              />
            </div>

            <div className='mb-6'>
              <label 
                htmlFor="phone" 
                className="block mb-2 text-sm font-medium text-gray-700">
                  Teléfono
              </label>
              <input 
                type="number" 
                id="phone" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" 
                placeholder="123 456 789" 
                required 
                value={phone}
                onChange={(event) => {setPhone(event.target.value)}}
              />
            </div>
          </div>
            
            <div className='mb-6'>
              <label 
                htmlFor="level" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Postulo a nivel:
              </label>
              <select 
                id="level" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5" 
                onChange={(event) => {setLevel(event.target.value)}}
                value={level}>
                <option>-- Eligir --</option>
                <option>Guardería</option>
                <option>Jardín de Infantes</option>
                <option>Nivel Primario</option>
              </select>
            </div>

            <div className='mb-6'>                
              <label 
                htmlFor="message" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mensaje
              </label>
              <textarea 
                id="message" 
                // rows={8} 
                className={`block p-2.5 w-[95%] max-h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Escriba aquí su mensaje" 
                required
                value={message}
                onChange={(event) => {setMessage(event.target.value)}}
                maxLength={maxCharacters}>
              </textarea>
              <p className=' text-gray-600 text-xs relative left-[455px] py-1'>{maxCharacters - message.length} caracteres restantes</p>
            </div>

            <div className='mb-6 flex justify-end'>
              <button 
                type='submit' 
                className={disabledBtn() ? styles["form-btn-disabled"] : styles["form-btn-enabled"]}
                disabled={disabledBtn()}>
                  Enviar
              </button>
            </div>

        </form>

      </div>

    </>
  )
}

export default ConsultForm
