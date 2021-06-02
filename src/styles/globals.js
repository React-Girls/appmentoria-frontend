import {createGlobalStyle} from 'styled-components'

const Globals = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

`

export default Globals