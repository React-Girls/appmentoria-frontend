import { TitleH1 } from "./styled";


export default function Title({children, color}){
    return(
        <TitleH1 blue={color}>
            {children}
        </TitleH1>
    )
}