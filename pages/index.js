import Head from 'next/head'

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Photography,
} from '../partials';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leandro Araújo</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Contact />
        <About />

      </main>
      
      <Photography />

      <Footer />
    </div>
  )
}
