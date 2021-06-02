import Title from "../../../components/foundation/Title";
import Typography from "../../../components/foundation/Typography";
import { WhatIsWrapper, Container, Div, Img } from "./styled";

export default function SectionWhatIs(){

    return(
        <WhatIsWrapper>
            <Title>O que é o mentorialab?</Title>

            <Container active> 
                <Img src="/assets/home/Ilustração2.svg" alt=""/>

                <Div>
                    <Typography>
                        É a maior plataforma de mentorias do Brasil que conecta 
                        profissionais experientes com profissionais em ascenção 
                        para um maior desempenho profissional e realização em projetos
                        e carreiras.
                    </Typography>
                    
                    <Typography>
                        Oferecemos agenda, vídeochamada, gravação, fórum, e pagamento
                        100% seguro. Cuidamos de tudo para você!
                    </Typography>

                    <button>
                        Quero encontrar um mentor!
                    </button>
                </Div>

            </Container>
        </WhatIsWrapper>
    )
}