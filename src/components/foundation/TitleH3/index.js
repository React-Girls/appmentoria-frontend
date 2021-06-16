import { H3 } from './styled';

export default function TitleH3({ children, color }){
    return(
        <H3 white={color}>
            {children}
        </H3>
    )
}