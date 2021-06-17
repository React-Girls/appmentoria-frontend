import Head from '../infra/components/Head'

import SectionTestimonials from '../containers/Home/SectionTestimonials'
import SectionWhatIs from '../containers/Home/SectionWhatIs'
import {HomeContainer, Main, Section} from '../styles/styledHome'
import SectionFindMentor from '../containers/Home/SectionFindMentor'

export default function Home() {
  return (
    <HomeContainer>
      <Head title='Home - mentoriaAPP' />

      <Main>
        <Section blue>
          <SectionFindMentor />
        </Section>
        <Section>
          <SectionWhatIs />
        </Section>
        
        <Section id='howIt' blue>Azul 2</Section>
        
        <Section>
          <SectionTestimonials />
        </Section>
      </Main>
    </HomeContainer>
  )
}
