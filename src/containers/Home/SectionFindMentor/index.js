import Title from "../../../components/foundation/Title";
import TitleH3 from "../../../components/foundation/TitleH3";
import { Container, Div, FindMetorWrapper } from "./styled";


export default function SectionFindMentor(){

    return(
        <FindMetorWrapper>
            <Container>
                <Div>
                    <Title>Encontre mentores na sua área
                        que podem te ajudar a crescer!
                    </Title>

                    <TitleH3 color='white'>
                        Alavanque seus conhecimentos com mentoria personalizada!
                    </TitleH3>

                    <button>
                        Quero encontrar um mentor!
                    </button>
                </Div>
                <img src="/assets/home/Mentor1.svg" alt="" />
            </Container>
        </FindMetorWrapper>
    )
}