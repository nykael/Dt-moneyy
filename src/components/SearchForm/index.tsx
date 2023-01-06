import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Container } from './styled'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

const serchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof serchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(serchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}
