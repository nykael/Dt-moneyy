import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-self: center;
`

export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  padding: 1rem 1.25rem;
  border: 0;
  border-radius: 8px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`
