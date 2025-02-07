import { Suspense, lazy } from 'react'

const Videos = lazy(() => import('./_components/videos'))
const About = lazy(() => import('./_components/about'))
const Models = lazy(() => import('./_components/models'))
const Quotes = lazy(() => import('./_components/quotes'))
const Footer = lazy(() => import('./_components/footer'))

function Home() {
  return (
    <main>
      <Suspense fallback={<div>Carregando Videos...</div>}>
        <Videos />
      </Suspense>
      <Suspense fallback={<div>Carregando Sobre Nós...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Carregando Modelos...</div>}>
        <Models />
      </Suspense>
      <Suspense fallback={<div>Carregando Comentários...</div>}>
        <Quotes />
      </Suspense>
      <Suspense fallback={<div>Carregando Rodapé...</div>}>
        <Footer />
      </Suspense>
    </main>
  )
}

export default Home
