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
    day: String!
    month: String!
    year: String!
    time: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input setAppoint {
    name: String
    message: String
    day: String
    month: String
    year: String
    time: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    appt(meid: ID, appointID: ID): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(email: String!, password: String!): User
    createAppointment(input: setAppoint!): User
    updateAppointment(appointID: ID, input: setAppoint): User
    deleteAppointment(appointID: ID!): User
  }
`;

module.exports = typeDefs;
