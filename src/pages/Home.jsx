import { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Home/Hero/Hero'
import { Resources } from '../components/Home/Resources/Resources'
import { CardList } from '../components/Home/CardList/CardList'
import { Institutional } from '../components/Home/Institutional/Institutional'
import { FAQ } from '../components/Home/FAQ/FAQ'
import { ConfirmButton } from '../components/ConfirmButton/ConfirmButton'
import { Footer } from '../components/Footer/Footer'
import { cardsData } from '../data/cards'

export default function Home() {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsData)
    }, 3000)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resources />
        <CardList cards={cards} />
        <ConfirmButton text="Abra sua conta" />
        <Institutional />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
