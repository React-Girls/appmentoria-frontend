import Title from "../../../components/foundation/Title";
import TitleH3 from "../../../components/foundation/TitleH3";
import Typography from "../../../components/foundation/Typography";
import { WhatIsWrapper, Container, Div } from "./styled";

export default function SectionWhatIs(){

    return(
        <WhatIsWrapper>
            <Title color='blue'>O que é o mentorialab?</Title>

            <Container> 
                <img src="/assets/home/Ilustração2.svg" alt=""/>

                <Div>
                    <Typography>
                        É a maior plataforma de mentorias do Brasil que conecta 
                        profissionais experientes com profissionais em ascenção 
                        para um maior desempenho profissional e realização em projetos
                        e carreiras.
                    </Typography>
                    
                    <TitleH3>
                        Oferecemos agenda, vídeochamada, gravação, fórum, e pagamento
                        100% seguro. Cuidamos de tudo para você!
                    </TitleH3>

                    <button>
                        Quero encontrar um mentor!
                    </button>
                </Div>

            </Container>
        </WhatIsWrapper>
    )
}