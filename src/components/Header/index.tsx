import { Container, HeaderContent, NewTransactionButton } from './styled'
import * as Dialog from '@radix-ui/react-dialog'
import LogoImg from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
    return (
        <Container>
            <HeaderContent>
                <img src={LogoImg}  alt="Logo Dt-Money"/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </Container>
    )
}