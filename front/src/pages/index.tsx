import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainScreenObjective from '@/components/MainScreenObjective'
import MainScreenGreeting from '@/components/MainScreenGreeting'
import MainScreenChart from '@/components/MainScreenChart'
import CurrentDayTable from '@/components/CurrentDayTable'
import AddIntake from '@/components/AddIntake'
import Header from '@/components/Header'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type RowData = {
  name: String,
  time: String,
  quantity: Number,
}

export default function Home() {
  const [ user, _setUser ] = useState<{
    name: String,
    ate: Number,
    goal: Number,
  }>({
    name: 'Zé',
    ate: 23,
    goal: 120,
  })
  const [ userData, _setUserData ] = useState<Array<{
    day: String,
    value: Number,
  }>>([
    {day: '04/06', value: 100},
    {day: '05/06', value: 130},
    {day: '06/06', value: 80},
  ])
  const [ userIntake, _setUserIntake ] = useState<Array<RowData>>([
    {name: 'Egg', time: '08:11', quantity: 1},
  ])

  const onIntakeSubmit = (proteinSource: string, quantity: number) => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    const newUserIntake = {
      name: proteinSource,
      time,
      quantity
    }
    const updatedUserIntake = [...userIntake,  newUserIntake]
    _setUserIntake(updatedUserIntake)
  };

  return (
    <>
      <Head>
        <title>Protein Tracker</title>
        <meta name="description" content="A BEAUTIFUL DESCRIPTION WILL BE ADDED" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Header />
        </div>

        <div className={styles.center}>
          <MainScreenGreeting
            name={user.name}
          />
          <MainScreenObjective
            ate={user.ate}
            goal={user.goal}
          />
          <MainScreenChart
            data={userData}
          />
          <div>
            <h2>Today&apos;s intakes</h2>
            <CurrentDayTable
              data={userIntake}
            />
          </div>
          <AddIntake
            onSubmit={onIntakeSubmit}
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Here Will Be The Footer
            </h2>
            <p className={inter.className}>
              Don&apos;t know what to insert here yet.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
