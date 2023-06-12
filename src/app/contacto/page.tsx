import { Preguntas } from "../Components/preguntas";


export default function Contacto() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          ESTA ES LA PAGINA DE CONTACTO
        </h1>
        <div>
          <h2 className="text-xl">
            PREGUNAS FRECUENTES
          </h2>
          <br />
          <Preguntas />
        </div>
    </main>
  )
}
