import ShowCase from '@/components/ShowCase'
import About from '@/components/about'
import Contact from '@/components/contact'
import Faqs from '@/components/faqs'
import Hero from '@/components/home'
import Testmonials from '@/components/testmonials'
import TrustedClients from '@/components/trustedClients'


export default function Home() {
  return (
    <>
      <Hero/>
      <TrustedClients/>
      <ShowCase/>
      <Testmonials/>
      <About/>
      <Contact/>
      <Faqs/>
    </>
  )
}
