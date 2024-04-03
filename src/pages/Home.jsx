import { useEffect, useState } from 'react'
import { Header } from '../components/Shared/Header/Header'
import { Hero } from '../components/Home/Hero/Hero'
import { Resources } from '../components/Home/Resources/Resources'
import { CardList } from '../components/Home/CardList/CardList'
import { Institutional } from '../components/Home/Institutional/Institutional'
import { FAQ } from '../components/Home/FAQ/FAQ'
import { ConfirmButton } from '../components/Shared/ConfirmButton/ConfirmButton'
import { Footer } from '../components/Shared/Footer/Footer'
import { cardsData } from '../data/cards'

export default function Home() {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    ;(async () => await loadData())()
  }, [])

  async function loadData() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000))
    setCards(cardsData)
  }

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
