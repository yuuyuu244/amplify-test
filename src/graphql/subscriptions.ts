/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransportationCosts = /* GraphQL */ `
  subscription OnCreateTransportationCosts(
    $filter: ModelSubscriptionTransportationCostsFilterInput
  ) {
    onCreateTransportationCosts(filter: $filter) {
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
export const onUpdateTransportationCosts = /* GraphQL */ `
  subscription OnUpdateTransportationCosts(
    $filter: ModelSubscriptionTransportationCostsFilterInput
  ) {
    onUpdateTransportationCosts(filter: $filter) {
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
export const onDeleteTransportationCosts = /* GraphQL */ `
  subscription OnDeleteTransportationCosts(
    $filter: ModelSubscriptionTransportationCostsFilterInput
  ) {
    onDeleteTransportationCosts(filter: $filter) {
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
