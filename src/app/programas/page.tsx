import Sala from "../Components/SalaComponent"
import Estrellita from "../../../public/img/salas/salaEst.png"
import Estrellita2 from "../../../public/img/salas/salaEst2.png"
import Pequenos from "../../../public/img/salas/salaPeq.png"
import Pequenos2 from "../../../public/img/salas/salaPeq2.png"
import Pasos from "../../../public/img/salas/salaPasos.png"
import Pasos2 from "../../../public/img/salas/salaPasos2.png"
import Gig from "../../../public/img/salas/salaGig.png"
import Gig2 from "../../../public/img/salas/salaGig2.png"




export default function Programas() {
  return (
    <main className="flex min-h-screen flex-col justify-between font-bold relative top-[-100px] left-8 ">

      <section className="bg-gradient-to-b from-yellow-200 via-orange-200 to-yellow-200 w-full h-[770px] relative left-[-30px]">
        <h2 className="flex justify-around font-['Tahoma'] text-[#03CB8F] text-2xl mb-4  mt-4 ">⭐ Sala Estrellitas ⭐</h2>
        <Sala
          title='Método Montesori'
          text1='Nuestro Jardín Maternal abre sus puertas a bebés a partir de los cuatro meses. Los niños encuentran la posibilidad de aprender con y de otros niños. Generamos espacios lúdicos para que se inicien en el conocimiento del mundo, explorando el ambiente a través de experiencias comunicativas, corporales y motrices; favoreciendo así la construcción de la identidad y la convivencia con los demás.'
          text2='La contención, el afecto, la seguridad, el apoyo, la confianza brindada desde nuestro rol docente son organizadores básicos. Acompañar, sostener y estimular a los niños, como también relacionarse con la familia, integrándose y diferenciándose de ella, constituyen los principales propósitos de las propuestas didácticas de nuestro Jardín.'
          items={{
            'a': 'Salas con aire acondicionado frío/calor, pisos de goma, material didáctico.',
            'b': 'Sala de Lactancia Materna.',
            'c': 'Música, terapia ocupacional.',
            'd': 'Baby Gimnasio de integración sensorial.',
            'e': 'Cambiadores exclusivos para Salas Lactantes y Deambuladores.',
            'f': 'Aulas y actividades de estimulación adecuada.',
            'g': 'Sector de cunas con temperatura y música adecuadas para el sueño.'
          }}
          imgSrc={Estrellita}
          bg='bg-[#1999FA] p-6 rounded-lg shadow space-x-0.5'
          subTitle='Estrellita'
          iSrc={Estrellita2}
          title2='Extras & Enriquecimiento'
          text3='Sabemos lo difícil que es dejar a tu bebé, por eso diseñamos un espacio agradable que busca preservar el cuidado y bienestar necesarios en esta etapa. Contamos con una Sala Exclusiva para bebés entre los 4 y 18 meses, que brinda la comodidad y seguridad necesarias para los más pequeños, que pretende fortalecer el vínculo familiar en compañía de nuestro equipo profesional.'
          items2={{
            'uno': 'Terapia Ocupacional',
            'dos': 'Música',
            'tres': 'Baby Gimnásio',
            'cuatro': 'Arte',
            'cinco': 'Títeres',
          }}
        />
      </section>

      <section className="bg-gradient-to-b from-purple-200 via-teal-200 to-purple-200 w-full h-[780px] relative left-[-30px]">
        <h2 className="flex justify-around font-['Tahoma'] text-[#bd64ad] text-2xl  mt-6 mb-4">🎨 Sala Pequeñitos 🪅</h2>
        <Sala
          title='Método Montesori'
          text1='En la Sala Pequeñitos promovemos el desarrollo de habilidades cognitivas, emocionales, artísticas y motrices. Ofrecemos propuestas lúdicas planificando actividades por áreas: Matemática, Prácticas del Lenguaje, Ciencias Sociales y Naturales. Las experiencias didácticas facilitan la expresión de los niños y niñas a través de distintos lenguajes artísticos: Música, Plástica, Expresión Corporal y Literatura.'
          text2='Compartir el juego del niño es una manera de intercambiar con él, contenerlo, y volver a conectarnos con una parte del niño que conservamos los adultos a través del tiempo. Gracias a la actividad lúdica, pueden manifestar su curiosidad y satisfacer la necesidad que sienten de descubrir, al mismo tiempo que significa una fuente de placer, les ayuda a ganar confianza en sí mismos y en los demás, y a reforzar su autonomía y creatividad.'
          items={{
            'a': 'Salas con aire acondicionado frío/calor, pisos de goma, material didáctico.',
            'b': 'Baños dentro de cada sala.',
            'c': 'Sector de juegos cubiertos y descubiertos.',
            'd': 'Laboratorio de Informática.',
            'e': 'Patio de Deportes.',
            'f': 'Comedor y Salón de Actos.',
            'g': 'Biblioteca - Sala de Inglés.'
          }}
          imgSrc={Pequenos}
          bg='bg-[#1999FA] p-6 rounded-lg shadow space-x-0.5'
          subTitle=''
          iSrc={Pequenos2}
          title2='Extras & Enriquecimiento'
          text3='Una mirada basada en aquello que maravilla al niño y que lo invita a generar nuevos conocimientos. Los niños tienen la libertad de explorar y desarrollar sus potenciales al trabajar con materiales, ya sea independientemente o en grupos, dentro de un ambiente preparado para cada uno de ellos.'
          items2={{
            'uno': 'Gimnasia',
            'dos': 'Música',
            'tres': 'Cocina',
            'cuatro': 'Yoga',
            'cinco': 'Talleres',
          }}
        />
      </section>

      <section className="bg-gradient-to-b from-red-300 via-purple-300 to-red-300 w-full h-[] relative left-[-30px]">
        <h2 className="flex justify-around font-['Tahoma'] text-[#f74479] text-2xl  mt-6 mb-4">🪁 Sala Primeros Pasos 🧩</h2>
        <Sala
          title='Método Montesori'
          text1='En la salita Primeros Pasos nos proponemos que los niños se inicien en el desarrollo de competencias emocionales. Abordamos proyectos que los ayudan a reconocer sus emociones, canalizarlas, expresarlas y compartirlas. A través de distintas propuestas didácticas los niños logran identificar las emociones básicas como alegría, tristeza, miedo y enojo. '
          text2='El espacio escolar debe ser flexible en el tiempo y manipulable, debe mutar, ser modificado según la propuesta y la necesidad para que se transforme en un ambiente rico y potente.Los escenarios lúdicos son espacios diseñados con sencillos y diversos elementos para la “acción-transformación” por parte de los niños.Jugando el niño incorpora nuevas experiencias, comete aciertos y errores, puede resolver conflictos y desarrollar capacidades del pensamiento.'
          items={{
            'a': 'Salas con aire acondicionado frío/calor, pisos de goma, material didáctico.',
            'b': 'Baños dentro de cada sala.',
            'c': 'Sector de juegos cubiertos y descubiertos.',
            'd': 'Laboratorio de Informática.',
            'e': 'Patio de Deportes.',
            'f': 'Comedor y Salón de Actos.',
            'g': 'Biblioteca - Sala de Inglés.'
          }}
          imgSrc={Pasos}
          bg='bg-[#1999FA] p-6 rounded-lg shadow space-x-0.5'
          subTitle=''
          iSrc={Pasos2}
          title2='Extras & Enriquecimiento'
          text3='En esta etapa los niños tienen el deseo de realizar acciones de manera independiente y se oponen a los adultos para afirmar esa marcha hacia su autonomía y al mismo tiempo, en otros momentos, expresan una necesidad de dependencia respecto del adulto y una puesta de límites que, a su vez, son desafiados.'
          items2={{
            'uno': 'Gimnasia',
            'dos': 'Talleres',
            'tres': 'Cocina',
            'cuatro': 'Yoga',
            'cinco': 'Idiomas',
          }}
        />
      </section>

      <section className="bg-gradient-to-tl from-yellow-200 via-teal-300 to-yellow-200 w-full h-[860px] relative left-[-30px]">
        <h2 className="flex justify-around font-['Tahoma'] text-[#ff7e4b] text-2xl  mt-6 mb-4">🔬 Sala Pequeños Gigantes 🎺</h2>
        <Sala
          title='Método Montesori'
          text1='Una mirada basada en aquello que maravilla al niño y que lo invita a generar nuevos conocimientos. Los niños tienen la libertad de explorar y desarrollar sus potenciales al trabajar con materiales, ya sea independientemente o en grupos, dentro de un Ambiente preparado.'
          text2='Encontramos en medio del contexto actual una oportunidad para fortalecer la construcción del tejido social, en donde reconozcamos la importancia de vivir  en compañía de otros, llegar a acuerdos y objetivos de bienestar. 

          Niños y niñas  inician su vida social  en un mundo cambiante, lleno de nuevos retos en torno a la idea de convivencia, empatía y responsabilidad social, por lo cual intentamos inspirar  en ellos y en sus familias  nuevas formas de entender y asimilar la realidad.'
          items={{
            'a': 'Salas con aire acondicionado frío/calor, pisos de goma, material didáctico.',
            'b': 'Baños dentro de cada sala.',
            'c': 'Sector de juegos cubiertos y descubiertos.',
            'd': 'Laboratorio de Informática.',
            'e': 'Patio de Deportes.',
            'f': 'Comedor y Salón de Actos.',
            'g': 'Biblioteca - Sala de Inglés.'
          }}
          imgSrc={Gig}
          bg='bg-[#1999FA] p-6 rounded-lg shadow space-x-0.5'
          subTitle=''
          iSrc={Gig2}
          title2='Extras & Enriquecimiento'
          text3='En esta sala los niños encuentran lenguajes, códigos y costumbres diferentes con los que se ven en situación de coexistir, contruyendo así representaciones sobre lo justo y lo injusto, lo correcto y lo incorrecto, los derechos y las obligaciones, las necesidades individuales y los problemas compartidos. Un espacio donde se inician en el ejercicio de derechos y responsabilidades individuales y grupales.'
          items2={{
            'uno': 'Gimnasia',
            'dos': 'Talleres',
            'tres': 'Cocina',
            'cuatro': 'Yoga',
            'cinco': 'Idiomas',
          }}
        />
      </section>

      <div className="flex items-center justify-center">
        <div className="text-center relative top-[50px] font-light font-sans">
          <p className="text-lg">En <b className="font-['Tahoma']">CreSiendo</b> nos preparamos para el inicio de la vida académica, pero sobre todo reforzamos la idea de disfrutar y aprender <br />
            en cada uno de los proyectos que decidamos emprender junto a nuestros alumnos.</p>
        </div>
      </div>

    </main>
  )
}
