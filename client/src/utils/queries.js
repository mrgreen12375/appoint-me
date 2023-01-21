import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query Me {
  me {
    username
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
