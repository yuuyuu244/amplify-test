/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransCosts = /* GraphQL */ `
  subscription OnCreateTransCosts(
    $filter: ModelSubscriptionTransCostsFilterInput
  ) {
    onCreateTransCosts(filter: $filter) {
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
export const onUpdateTransCosts = /* GraphQL */ `
  subscription OnUpdateTransCosts(
    $filter: ModelSubscriptionTransCostsFilterInput
  ) {
    onUpdateTransCosts(filter: $filter) {
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
export const onDeleteTransCosts = /* GraphQL */ `
  subscription OnDeleteTransCosts(
    $filter: ModelSubscriptionTransCostsFilterInput
  ) {
    onDeleteTransCosts(filter: $filter) {
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
