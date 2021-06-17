import styled from 'styled-components';

export const InputButton = styled.button`
    width: 375px;
    height: 66px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

    background: ${props => props.blue? '#0062B9' : '#FFFFFF'};

    color: ${props => props.blue? '#FFFFFF' : '#0062B9'};
    font-size: 25px;
    line-height: 50px;
    font-weight: 400;

    display: block;
    margin-left: auto;
    margin-right: auto;

`