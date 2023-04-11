/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransCosts = /* GraphQL */ `
  mutation CreateTransCosts(
    $input: CreateTransCostsInput!
    $condition: ModelTransCostsConditionInput
  ) {
    createTransCosts(input: $input, condition: $condition) {
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
export const updateTransCosts = /* GraphQL */ `
  mutation UpdateTransCosts(
    $input: UpdateTransCostsInput!
    $condition: ModelTransCostsConditionInput
  ) {
    updateTransCosts(input: $input, condition: $condition) {
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
export const deleteTransCosts = /* GraphQL */ `
  mutation DeleteTransCosts(
    $input: DeleteTransCostsInput!
    $condition: ModelTransCostsConditionInput
  ) {
    deleteTransCosts(input: $input, condition: $condition) {
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
