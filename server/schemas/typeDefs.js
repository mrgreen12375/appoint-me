const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    appointments: [appointment]
  }

  type appointment {
    _id: ID!
    name: String!
    message: String!
    date: String!
    time: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input setAppoint {
    name: String
    message: String
    date: String
    time: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(email: String!, password: String!): User
    createAppointment(input: setAppoint!): User
    updateAppointment(appointID: String!): User
    deleteAppointment(appointID: String!): User
  }
`;

module.exports = typeDefs;
