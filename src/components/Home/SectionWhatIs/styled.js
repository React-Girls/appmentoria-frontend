import styled from 'styled-components'

const WhatIsWrapper = styled.div`
    height: 100%;
    background: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;

    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 60px;
        line-height: 50px; /* or 83% */

        color: #0062B9;

    }

    .Container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 595px;
            height: 597px;
        }

        div{
            width: 587px;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;

            p{
                font-style: normal;
                font-weight: normal;
                font-size: 28px;
                line-height: 50px;/* or 179% */

                color: #000000;
            }
        }
    }


`

export default WhatIsWrapper