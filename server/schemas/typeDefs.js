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
    appointID: String!
    name: String!
    message: String!
    date: String!
    time: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(email: String!, password: String!): Auth
    createAppointment(
      name: String
      message: String
      date: String
      time: String
    ): User
    updateAppointment(appointID: String!): User
    deleteAppointment(appointID: String!): User
  }
`;

module.exports = typeDefs;
