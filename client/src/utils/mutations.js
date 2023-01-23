import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_APT = gql`
  mutation CreateAppointment($input: setAppoint!) {
    createAppointment(input: $input) {
      _id
      username
      email
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

export const DELETE_APT = gql`
  mutation DeleteAppointment($appointId: ID!) {
    deleteAppointment(appointID: $appointId) {
      _id
      username
      email
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

export const UPDATE_APT = gql`
mutation UpdateAppointment($input: setAppoint, $appointId: ID) {
  updateAppointment(input: $input, appointID: $appointId) {
    _id
    username
    email
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
`
