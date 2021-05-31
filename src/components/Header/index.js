import Link from 'next/link';
import { HeaderWrapper, 
        HeaderContainer,
        Info,
        Signin } from "./styledHeader";
import { FaUser } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';

export default function Header(){

    return(
        <HeaderWrapper>
            <HeaderContainer>
                <Info>
                    <img src="./assets/home/logo.svg" alt="Logo Mentoria Lab"/>
                    <div>
                        <Link href='#howIt'>
                            <a>Como funciona?</a>
                        </Link>
                        <Link href='/'>
                            <a>Quero ser mentor</a>
                        </Link>
                    </div>
                </Info>
                <Signin>
                    <Link href="/">
                       <a><FaUser /></a> 
                    </Link>
                    <Link href="/">
                        <a><FiMenu /></a>
                    </Link>
                </Signin>
            </HeaderContainer>
        </HeaderWrapper>
    )
}