import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      appointments {
        _id
        card
        createdAt
      }
    }
  }
`;

export const GET_APTS = gql`
  query Me {
    me {
      appointments {
        _id
        name
        message
        day
        month
        year
        time
      }
    }
  }
`;
