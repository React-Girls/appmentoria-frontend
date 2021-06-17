import styled from "styled-components";

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 40px;/* or 179% */

    color: ${props => props.white? '#FFFFFF' : '#000000'};

`