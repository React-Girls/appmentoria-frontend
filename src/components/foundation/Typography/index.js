import { Paragraph } from "./styled";


export default function Typography({ children, color }){
    return(
        <Paragraph white={color}>
            {children}
        </Paragraph>
    )
}