import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Container, PriceHighlight, TransactionsContainer, TransactionsTable } from './styled'



export function Transactions() {
    const {transactions} = useContext(TransactionContext)

    return (
        <Container>
            <Header />
            <Summary />

            <TransactionsContainer>
            <SearchForm />
            
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                            <tr key={transaction.id}>
                              <td width="50%">{transaction.description}</td>
                              <td>
                                <PriceHighlight 
                                variant={transaction.type}
                                >
                                    {
                                        transaction.type === 'outcome' && '- '
                                    }
                                {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                             </td>
                              <td>{transaction.category}</td>
                              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </Container>
    )
}