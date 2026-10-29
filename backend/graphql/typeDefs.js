const typeDefs = `
    type Problem {
        id: ID!
        title: String!
        description: String!
    }
    
    type Submission {
        id: ID!
        problemId: ID!
        solution: String!
        createdAt: String!
    }
    
    type Query {
        hello: String
        me: String
        problems: [Problem!]!
        mySubmissions: [Submission!]!
    }

    type Mutation {
        register(username: String!, email: String!, password: String!): String!
        login(username: String!, password: String!): String!
        submitSolution(problemId: ID!, solution: String!): Submission!
    }
`;

// TODO: add my own obj types here, e.g. type Book { id: ID, title: String }
// a [Book] return type means a list, and Book! that means it can't be null

module.exports = typeDefs;