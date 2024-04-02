import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Header } from '../components/Shared/Header/Header'
import { Hero } from '../components/Home/Hero/Hero'
import { Resources } from '../components/Home/Resources/Resources'
import { CardList } from '../components/Home/CardList/CardList'
import { Institutional } from '../components/Home/Institutional/Institutional'
import { FAQ } from '../components/Home/FAQ/FAQ'
import { ConfirmButton } from '../components/Shared/ConfirmButton/ConfirmButton'
import { Footer } from '../components/Shared/Footer/Footer'
import useSWR from 'swr'
import { fetcher } from '../data/api'

export default function Home() {
  // const [cards, setCards] = useState(null)
  const [clicked, setClicked] = useState(false)
  const { data: cards, error, isLoading } = useSWR('/cards', fetcher)

  // useEffect(() => {
  //   ;(async () => await loadData())()
  // }, [])

  // async function loadData() {
  //   const response = await axios.get('http://localhost:3000/cards')
  //   await new Promise((resolve) => setTimeout(() => resolve(true), 2000))
  //   setCards(response.data)
  // }

  async function changeClick() {
    setClicked(!clicked)
    // await loadData()
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resources handle={changeClick} />
        <CardList cards={cards} />
        <ConfirmButton text="Abra sua conta" />
        <Institutional />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
