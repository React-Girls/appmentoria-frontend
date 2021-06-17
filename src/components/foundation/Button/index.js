import {InputButton} from './styled'

export default function Button({children, color}){

    return(
        <InputButton blue={color}
            type='button'
        >
            {children}
        </InputButton>
    )
}