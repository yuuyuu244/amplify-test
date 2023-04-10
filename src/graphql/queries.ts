/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransportationCosts = /* GraphQL */ `
  query GetTransportationCosts($user_id: ID!, $target_date: String!) {
    getTransportationCosts(user_id: $user_id, target_date: $target_date) {
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
export const listTransportationCosts = /* GraphQL */ `
  query ListTransportationCosts(
    $user_id: ID
    $target_date: ModelStringKeyConditionInput
    $filter: ModelTransportationCostsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTransportationCosts(
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
export const transportationCostsByTarget_date = /* GraphQL */ `
  query TransportationCostsByTarget_date(
    $target_date: String!
    $sortDirection: ModelSortDirection
    $filter: ModeltransportationCostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transportationCostsByTarget_date(
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
