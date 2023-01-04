import { Container, HeaderContent, NewTransactionButton } from './styled'
import LogoImg from '../../assets/Logo.svg'

export function Header() {
    return (
        <Container>
            <HeaderContent>
                <img src={LogoImg}  alt="Logo Dt-Money"/>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </Container>
    )
}