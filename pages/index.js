import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>electron7's rickroll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
           <iframe width="420" height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
           </iframe>
      </main>

      <Footer />
    </div>
  )
}
