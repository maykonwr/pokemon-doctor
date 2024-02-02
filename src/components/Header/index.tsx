import LinkRedirect from '../LinkRedirect'
import { useRouter } from 'next/router'
import { HeaderStyle } from './style'

export const Header = () => {
    const router = useRouter()

    const handleLogoClick = () => {
        router.push('/')
    }
    return (
        <>
            <HeaderStyle>
                <div onClick={handleLogoClick}>
                    <div>
                        <img src='/images/whitePokeball.svg' alt='' />
                    </div>
                    <div>
                        <h1>Centro Pokémon</h1>
                    </div>
                </div>
                <nav>
                    <LinkRedirect children='Quem somos' href='/quem-somos' />
                    <LinkRedirect children='Agendar consulta' href='/consulta' />
                </nav>
            </HeaderStyle>
        </>
    )
}