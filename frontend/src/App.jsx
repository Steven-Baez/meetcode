import Card from './Card.jsx'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

const GET_HELLO = gql`
    query GetHello {
        hello
    }
`
const GET_PROBLEMS = gql`
    query GetProblems {
        problems {
            id
            title
        }
    }
`

function App() {
    const { loading, error, data } = useQuery(GET_PROBLEMS)

    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>Error: {error.message}</p>)

    return (
        <>
            {data.problems.map(problem => (
                <p key={problem.id}>{problem.title}</p>
             ))}
        </>
    )

    // return (<h1>{data.hello}</h1>)

  // return (
  //   <div>
  //         <Card title="Dune II" />
  //         <Card title="Across the Spiderverse" />
  //       </div>
  //
  // )
}

export default App