'use client';
import { Accordion } from "flowbite-react";
import Link from "next/link";

export function Preguntas() {
  return (
    <Accordion className="flex flex-wrap">
      {/* pregunta 1 */}
      <Accordion.Panel>
        <Accordion.Title>¿Cómo puedo inscribir a mi hijo/a?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Solicitando una entrevista con las autoridades del Instituto, para
              ello debe completar el
              <Link
                href="/"
                className="font-semibold text-blue-700 hover:underline dalg:text-blue-500"
              >
                {" "}
                formulario{" "}
              </Link>{" "}
              de consulta indicando:
              <br />
              <br />
              - Nombre y apellido del padre, madre o tutor
              <br />
              - Nombre del Alumno/a
              <br />
              - Nombre de la sala a la cual desea incorporarse
              <br />
              - Teléfono
              <br />
              - email.
              <br />
              <br />
              Una vez realizado el trámite una autoridad del jardín se
              comunicara para acordar una visita al mismo.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      {/* pregunta 2 */}
      <Accordion.Panel>
        <Accordion.Title>
          Una vez inscripto. ¿Cómo obtengo el numero de legajo?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Una vez inscripto se le enviara por el mail el nro de legajo del
              alumno, con ese nro y el DNI del titular debe ingresar al
              siguiente
              <br />
              <Link
                href="/"
                className="font-semibold text-blue-700 hover:underline dalg:text-blue-500"
              >
                formulario
              </Link>{" "}
              para validar los datos de referencia.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      {/* pregunta 3 */}
      <Accordion.Panel>
        <Accordion.Title>
          Si mi hijo/a ya pertenece al instituto. ¿Puedo gestionar el beneficio
          de la media beca?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Si. Si el alumno/a ya forma parte de la institución y cumplió más
              de 1 ciclo escolar dentro del mismo, tiene derecho y siempre que
              las circunstancias sean debidamente justificadas.
              <br />
              <br />
              Consulta los requisitos{" "}
              <Link
                href="/"
                className="font-semibold text-blue-700 hover:underline dalg:text-blue-500"
              >
                aquí.
              </Link>
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      {/* pregunta 4 */}
      <Accordion.Panel>
        <Accordion.Title>
          Si mi hijo/a no es de nacionalidad argentina. ¿Puedo inscribir al
          mismo dentro de la institución?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Sí. Presentando la misma información requerida para las personas nativas del país:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/pro/"
              >
                <p>Ver requisitos (Consulta 1)</p>
              </a>
            </li>
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://tailwindui.com/"
                rel="nofollow"
              >
                <p>Ver requisitos (Consulta 2)</p>
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      {/* pregunta 5 */}
      <Accordion.Panel>
        <Accordion.Title>
          ¿Cuál es el periodo máximo de estar pre-inscripto?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Los pedidos de renovación deberán efectuarse dentro de los TREINTA (30) días anteriores al 
              vencimiento de la matrícula.
              <br />
              <br />
              Si te presentas dentro de los TREINTA (30) días posteriores al vencimiento de la residencia 
              temporaria para solicitar tu renovación, sufrirás un recargo del CINCUENTA POR CIENTO (50%) 
              del monto de la tasa prevista para el trámite.
              <br />
              <br />
              Transcurridos los plazos establecidos, caducará la facultad de peticionar la renovación de la 
              matrícula.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
