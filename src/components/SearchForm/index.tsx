import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
    Container
} from './styled'

import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const serchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof serchFormSchema>

export function SearchForm() {
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>({
        resolver: zodResolver(serchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return(
        <Container onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
              type="text" 
              placeholder="Busque por transações" 
              {...register('query')}
            />

            <button 
              type="submit"
              disabled={isSubmitting}
             >
                <MagnifyingGlass  size={20}/>
                Buscar
            </button>
        </Container>
    )
}