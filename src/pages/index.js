import Head from 'next/head'
import HomeContainer from '../containers/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nova Web</title>
      </Head>
      <HomeContainer />
    </>
  )
}
