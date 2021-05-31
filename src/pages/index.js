import Head from '../infra/components/Head'

import SectionTestimonials from '../containers/Home/SectionTestimonials'
import SectionWhatIs from '../containers/Home/SectionWhatIs'
import HomeContainer from '../styles/styledHome'

export default function Home() {
  return (
    <HomeContainer>
      <Head title='Home - mentoriaAPP' />

      <section>Azul 1</section>
      <SectionWhatIs />
      <section id='howIt'>Azul 2</section>
      <SectionTestimonials />
    </HomeContainer>
  )
}
