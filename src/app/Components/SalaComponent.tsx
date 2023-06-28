import Image from "next/image"
import { Sala } from "../Interfaces/Sala"

const SalaComponent: React.FC<Sala> = ({ title, text1, text2, items, imgSrc, iSrc, title2, text3, items2 }) => {
  const { a, b, c, d, e, f, g } = items
  const { uno, dos, tres, cuatro, cinco } = items2

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-row justify-between">
        {/* Imágen */}
        <div className="w-[38%] relative bottom-6 left-[-40px]">
          <Image
            src={imgSrc}
            alt="sala Estrellitas"
          />
        </div>
        {/* Texto */}
        <div className="w-[32%] flex-col relative right-5 ">
          <h4 className="text-[#563CAB] font-['Tahoma'] text-lg font-semibold my-3 flex justify-center">{title}</h4>
          <div className=" font-sans font-normal text-justify">
            <p>{text1}</p>
            <br />
            <p>{text2}</p>
          </div>
        </div>
        {/* Items */}
        <div className="w-[30%] mx-10">
          <h4 className="text-[#FE4848] font-['Tahoma'] text-lg font-semibold my-3 flex justify-center">Contamos con</h4>
          <ul role="list" className="marker:text-red-400 list-disc pl-5 space-y-3 text-slate-500">
            <li className="font-sans font-normal text-justify ml-3">{a}</li>
            <li className="font-sans font-normal text-justify ml-3">{b}</li>
            <li className="font-sans font-normal text-justify ml-3">{c}</li>
            <li className="font-sans font-normal text-justify ml-3">{d}</li>
            <li className="font-sans font-normal text-justify ml-3">{e}</li>
            <li className="font-sans font-normal text-justify ml-3">{f}</li>
            <li className="font-sans font-normal text-justify ml-3">{g}</li>
          </ul>
        </div>
      </section>


      <section className="flex flex-row justify-between">
        {/* Texto 2*/}
        <div className="w-[28%] flex-col relative left-12 top-1">
          <div className=" font-sans font-normal text-justify">
            <p>{text3}</p>
          </div>
        </div>
        {/* Items 2*/}
        <div className="w-[350px]">
          <h4 className="text-[#FE4848] font-['Tahoma'] text-lg font-semibold mb-5">{title2}</h4>
          <div className="flex">
            <ul role="list" className="marker:text-red-400 list-disc pl-5 space-y-3 text-slate-500">
              <li className="font-sans font-normal text-justify ml-3">{uno}</li>
              <li className="font-sans font-normal text-justify ml-3">{dos}</li>
              <li className="font-sans font-normal text-justify ml-3">{tres}</li>
            </ul>
            <ul role="list" className="marker:text-red-400 list-disc pl-5 space-y-3 text-slate-500 ">
              <li className="font-sans font-normal text-justify ml-3">{cuatro}</li>
              <li className="font-sans font-normal text-justify ml-3">{cinco}</li>
            </ul>
          </div>
        </div>
        {/* Imágen 2 */}
        <div className="w-[300px] relative bottom-16 right-32">
          <Image
            src={iSrc}
            alt="sala Estrellitas"
          />
        </div>
      </section>

    </div>
  )
}

export default SalaComponent
