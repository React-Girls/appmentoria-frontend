import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
`

export const Main = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;

`

export const Section = styled.section`
    width: 100%;
    height: 700px;
    padding-top: 70px;

    background: ${props => props.blue ? '#0062B9': '#FFFFFF'};

    display: flex;
    align-items: center;
    justify-content: center;
`