import Link from 'next/link';
import { HeaderWrapper } from "./styledHeader";
import { FaUser } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';

export default function Header(){

    return(
        <HeaderWrapper>
            <div className="headerContainer">
                <div className="info">
                    <img src="./assets/home/logo.svg" alt="Logo Mentoria Lab"/>
                    <div>
                        <Link href='/'>
                            <a>Como funciona?</a>
                        </Link>
                        <Link href='/'>
                            <a>Quero ser mentor</a>
                        </Link>
                    </div>
                </div>
                <div className="signin">
                    <Link href="/">
                       <a><FaUser /></a> 
                    </Link>
                    <Link href="/">
                        <a><FiMenu /></a>
                    </Link>
                </div>
            </div>
        </HeaderWrapper>
    )
}