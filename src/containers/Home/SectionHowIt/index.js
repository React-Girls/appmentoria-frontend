import Title from "../../../components/foundation/Title";
import Typography from "../../../components/foundation/Typography";
import { ImgCard, Card, HowItCards, HowItContainer, HowItWrapper } from "./styled";

export default function SectionHowIt(){

    return(
        <HowItWrapper>
            <HowItContainer>
                <Title>
                    Como Funciona?
                </Title>

                <HowItCards>
                    <Card>
                        <ImgCard>
                            <img src="/assets/home/lock.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>1.</Typography>
                        <Typography color='white'>
                            Basta fazer seu login
                        </Typography>
                    </Card>

                    <Card>
                        <ImgCard>
                            <img src="/assets/home/search.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>2.</Typography>
                        <Typography color='white'>
                            Especificar a área de expertise que busca
                        </Typography>
                    </Card>

                    <Card>
                        <ImgCard>
                            <img src="/assets/home/calendar.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>3.</Typography>
                        <Typography color='white'>
                            Reservar a agenda do mentor que você escolher
                        </Typography>
                    </Card>

                    <Card>
                        <ImgCard>
                            <img src="/assets/home/credit-card.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>4.</Typography>
                        <Typography color='white'>
                            Escolher o plano
                        </Typography>

                    </Card>

                    <Card>
                        <ImgCard>
                            <img src="/assets/home/startup.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>5.</Typography>
                        <Typography color='white'>
                            Ter uma experiência transformadora!
                        </Typography>
                    </Card>

                    <Card>
                        <ImgCard>
                            <img src="/assets/home/lock.svg" alt="" />
                        </ImgCard>
                        <Typography color='white'>6.</Typography>
                        <Typography color='white'>
                            Lorem ipsum sicing elit. Eligendi!
                        </Typography>
                    </Card>
                </HowItCards>
            </HowItContainer>
        </HowItWrapper>
    )
}