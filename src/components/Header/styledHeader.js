import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 63px;

    background: #0062B9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    color: #FFFFFF;
    font-size: 18px;
    line-height: 30px;

    display: flex;
    align-items: center;

    .headerContainer{
        width: 100%;
        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: space-between;

        .info{
            width: 70%;
            padding-left: 10px;
            display: flex;
            align-items: center;

            & > div{
                width: 100%;
                margin-left: 20px;

                display: flex;
                justify-content: space-around;
            }
        }

        .signin{
            width: 80px;
        }
    }
`

