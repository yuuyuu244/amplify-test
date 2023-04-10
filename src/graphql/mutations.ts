/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransportationCosts = /* GraphQL */ `
  mutation CreateTransportationCosts(
    $input: CreateTransportationCostsInput!
    $condition: ModelTransportationCostsConditionInput
  ) {
    createTransportationCosts(input: $input, condition: $condition) {
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
export const updateTransportationCosts = /* GraphQL */ `
  mutation UpdateTransportationCosts(
    $input: UpdateTransportationCostsInput!
    $condition: ModelTransportationCostsConditionInput
  ) {
    updateTransportationCosts(input: $input, condition: $condition) {
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
export const deleteTransportationCosts = /* GraphQL */ `
  mutation DeleteTransportationCosts(
    $input: DeleteTransportationCostsInput!
    $condition: ModelTransportationCostsConditionInput
  ) {
    deleteTransportationCosts(input: $input, condition: $condition) {
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
