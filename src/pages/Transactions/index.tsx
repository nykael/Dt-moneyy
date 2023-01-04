import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Container, PriceHighlight, TransactionsContainer, TransactionsTable } from './styled'

export function Transactions() {
    return (
        <Container>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td>Venda</td>
                            <td>04/01/2023</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburger</td>
                            <td><PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight></td>
                            <td>Alimentação</td>
                            <td>04/01/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </Container>
    )
}