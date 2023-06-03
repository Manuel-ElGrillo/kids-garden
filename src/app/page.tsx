import Image from 'next/image'
import CardsComponent from './Components/CardsComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <CardsComponent/>

    </main>
  )
}
