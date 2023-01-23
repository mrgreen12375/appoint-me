import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      appointments {
        _id
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
