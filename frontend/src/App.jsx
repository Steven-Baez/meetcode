import Card from './Card.jsx'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

const GET_HELLO = gql`
    query GetHello {
        hello
    }
`

function App() {
  return (
    <div>
      <Card title="Dune II" />
      <Card title="Across the Spiderverse" />
    </div>
  )
}

export default App