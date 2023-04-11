/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransCosts = /* GraphQL */ `
  query GetTransCosts($user_id: ID!, $target_date: String!) {
    getTransCosts(user_id: $user_id, target_date: $target_date) {
      user_id
      target_date
      created_at
      updated_at
      status
      amount
      comment
      details {
        seq
        used_at
        trans_mode
        board_station
        getoff_station
        price
        days
        is_round
        is_ticket
        note
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTransCosts = /* GraphQL */ `
  query ListTransCosts(
    $user_id: ID
    $target_date: ModelStringKeyConditionInput
    $filter: ModelTransCostsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTransCosts(
      user_id: $user_id
      target_date: $target_date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        target_date
        created_at
        updated_at
        status
        amount
        comment
        details {
          seq
          used_at
          trans_mode
          board_station
          getoff_station
          price
          days
          is_round
          is_ticket
          note
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const transCostsByTarget_date = /* GraphQL */ `
  query TransCostsByTarget_date(
    $target_date: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTransCostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transCostsByTarget_date(
      target_date: $target_date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        user_id
        target_date
        created_at
        updated_at
        status
        amount
        comment
        details {
          seq
          used_at
          trans_mode
          board_station
          getoff_station
          price
          days
          is_round
          is_ticket
          note
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
