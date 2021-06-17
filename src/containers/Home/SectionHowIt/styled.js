import styled from 'styled-components';

export const HowItWrapper = styled.div`
    width: 1152px;
    height: 100%;
`


export const HowItContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HowItCards = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;

    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 293px);
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.div`
    height: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

`

export const ImgCard = styled.div`
    width: 80px;
    height: 80px;

    img{
        width: 100%;
        height: 100%;
    }

`