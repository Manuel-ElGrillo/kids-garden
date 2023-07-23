"use client";
import { Preguntas } from "../Components/preguntas";
import ContactoCards from "../Components/contactoCards";
import imgDirectora from "../imagenes/foto-carnet-fondo-celeste.jpg";
import imgCoordinadora from "../imagenes/pilar_casani_madrid_16_mayo_2017_fotografo_jose_pedro_salinas.jpg";
import imgDocente01 from "../imagenes/-Ct_72472233.jpg";
import imgDocente02 from "../imagenes/1656832917835.jpg";
import imgDocente03 from "../imagenes/Docente01.webp";
import imgVice from "../imagenes/Vicedirector.jpg";
import imgDocente04 from "../imagenes/Artes.png";

export default function Contacto() {
  return (
    <main className="bg-gray-100 dark:bg-[#401A70] flex min-h-screen flex-col  justify-between p-6">
      <div className="flex">
        {/* seccion directivos */}

        <div className="w-6/12">
          <h2 className="text-2xl">Directivos</h2>
          <ContactoCards
            nombre="Adriana Jimena Sánchez"
            cargo="Directora General"
            imgSrc={imgDirectora}
            alt="foto de la directora"
            titleBackground="bg-ccolor01"
            modalnombre="Adriana Jimena Sánchez"
            modalcargo="Directora General y representante legal de la institucion."
            modalpuesto="A cargo de la direccion y coordinacion de la institucion."
            modalperiodo="Periodo: 2020-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 103"
            modalmail="E-mail: directora@creciendo.com.ar"
          />
          <ContactoCards
            nombre="Norberto Ceballos"
            cargo="Vicedirector"
            imgSrc={imgVice}
            alt="foto del vicedirector"
            titleBackground="bg-ccolor02"
            modalnombre="Norberto Ceballos"
            modalcargo="Vicedirector de la institucion."
            modalpuesto="A cargo de la vicedireccion de la institucion."
            modalperiodo="Periodo: 2020-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 102"
            modalmail="E-mail: vicedirector@creciendo.com.ar"
          />
          <ContactoCards
            nombre="Romina Casani"
            cargo="Coordinadora General"
            imgSrc={imgCoordinadora}
            alt="foto de la coordinadora"
            titleBackground="bg-ccolor03"
            modalnombre="Romina Casani"
            modalcargo="Coordinadora General y consultora pedagogica"
            modalpuesto="A cargo de la coordinacion y consultoria pedagogica de la institucion"
            modalperiodo="Periodo: 2018-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 105"
            modalmail="E-mail: coordinador@creciendo.com.ar"
          />
        </div>

        {/* seccion de los docentes */}

        <div className="w-6/12">
          <h2 className="text-2xl">Docentes</h2>
          <ContactoCards
            nombre="Claudia Maldonado"
            cargo="Docente"
            imgSrc={imgDocente01}
            alt="foto de la docente"
            titleBackground="bg-ccolor01"
            modalnombre="Claudia Maldonado"
            modalcargo="Docente nivel inicial"
            modalpuesto="Profesora titular de sala de 2 años"
            modalperiodo="Periodo: 2019-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 110"
            modalmail="E-mail: cmaldonado@creciendo.com.ar"
          />
          <ContactoCards
            nombre="Maria Laura Peralta"
            cargo="Docente Adjunta"
            imgSrc={imgDocente02}
            alt="foto de la docente02"
            titleBackground="bg-ccolor02"
            modalnombre="Maria Laura Peralta"
            modalcargo="Docente adjunta de nivel inicial"
            modalpuesto="Profesora adjunta de sala de 2 años"
            modalperiodo="Periodo: 2022-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 111"
            modalmail="E-mail: mperalta@creciendo.com.ar"
          />
          <ContactoCards
            nombre="Diego Armando Maradona"
            cargo="Docente de artes plsticas"
            imgSrc={imgDocente04}
            alt="foto de la docente03"
            titleBackground="bg-ccolor03"
            modalnombre="Diego Armando Maradona"
            modalcargo="Docente de artes plasticas"
            modalpuesto="Profesor de artes plasticas, manuales y actividades artisticas"
            modalperiodo="Periodo: 2022-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 112"
            modalmail="E-mail: dmaradona@creciendo.com.ar"
          />
          <ContactoCards
            nombre="Jimena Montes de Oca"
            cargo="Profesora de ingles"
            imgSrc={imgDocente03}
            alt="foto de la docente04"
            titleBackground="bg-ccolor04"
            modalnombre="Jimena Montes de Oca"
            modalcargo="Docente de ingles"
            modalpuesto="Profesora de ingles, nivel inicial y primario"
            modalperiodo="Periodo: 2019-2024"
            modalcontacto="Tel: 0351-433-2090 Int: 113"
            modalmail="E-mail: jimena@creciendo.com.ar"
          />
        </div>
      </div>
      <br />

      {/* Ak va el area de preguntas frecuetes */}
      <h2 className="text-xl">PREGUNAS FRECUENTES</h2>
      <br />
      <Preguntas />
    </main>
  );
}
