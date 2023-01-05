import { createContext, ReactNode, useEffect, useState } from "react";


interface TransactionsProps{
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}


interface TransactionContextType {
    transactions: TransactionsProps[]
}

interface transactionProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: transactionProviderProps ) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    useEffect(() => {
        async function loadTransactions() {
            const response = await  fetch('http://localhost:3333/transactions')
            const data = await response.json()

            console.log(data)
            setTransactions(data)
        } 
        loadTransactions()
    },[])

    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}