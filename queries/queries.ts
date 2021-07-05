import { gql } from '@apollo/client'

export const GET_USERS = gql`
  #graphql
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`

export const GET_USERS_LOCAL = gql`
  #graphql
  query GetUsers {
    users(order_by: { created_at: desc }) @client {
      id
      name
      created_at
    }
  }
`

export const GET_USERIDS = gql`
  #graphql
  query GetUseIds {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`

export const GET_USERBY_ID = gql`
  #graphql
  query GetUserByID($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`

export const CREATE_USER = gql`
  #graphql
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`

export const DELETE_USER = gql`
  #graphql
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`

export const UPDATE_USER = gql`
  #graphql
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`
