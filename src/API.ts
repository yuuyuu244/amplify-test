/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransCostsInput = {
  user_id: string,
  target_date: string,
  created_at: string,
  updated_at: string,
  status: string,
  amount: number,
  comment?: string | null,
  details?: Array< DetailsInput | null > | null,
};

export type DetailsInput = {
  seq: number,
  used_at: string,
  trans_mode: string,
  board_station?: string | null,
  getoff_station?: string | null,
  price: number,
  days?: number | null,
  is_round?: boolean | null,
  is_ticket?: boolean | null,
  note?: string | null,
};

export type ModelTransCostsConditionInput = {
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelTransCostsConditionInput | null > | null,
  or?: Array< ModelTransCostsConditionInput | null > | null,
  not?: ModelTransCostsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TransCosts = {
  __typename: "TransCosts",
  user_id: string,
  target_date: string,
  created_at: string,
  updated_at: string,
  status: string,
  amount: number,
  comment?: string | null,
  details?:  Array<Details | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Details = {
  __typename: "Details",
  seq: number,
  used_at: string,
  trans_mode: string,
  board_station?: string | null,
  getoff_station?: string | null,
  price: number,
  days?: number | null,
  is_round?: boolean | null,
  is_ticket?: boolean | null,
  note?: string | null,
};

export type UpdateTransCostsInput = {
  user_id: string,
  target_date: string,
  created_at?: string | null,
  updated_at?: string | null,
  status?: string | null,
  amount?: number | null,
  comment?: string | null,
  details?: Array< DetailsInput | null > | null,
};

export type DeleteTransCostsInput = {
  user_id: string,
  target_date: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTransCostsFilterInput = {
  user_id?: ModelIDInput | null,
  target_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelTransCostsFilterInput | null > | null,
  or?: Array< ModelTransCostsFilterInput | null > | null,
  not?: ModelTransCostsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTransCostsConnection = {
  __typename: "ModelTransCostsConnection",
  items:  Array<TransCosts | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTransCostsFilterInput = {
  user_id?: ModelSubscriptionIDInput | null,
  target_date?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransCostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransCostsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTransCostsMutationVariables = {
  input: CreateTransCostsInput,
  condition?: ModelTransCostsConditionInput | null,
};

export type CreateTransCostsMutation = {
  createTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransCostsMutationVariables = {
  input: UpdateTransCostsInput,
  condition?: ModelTransCostsConditionInput | null,
};

export type UpdateTransCostsMutation = {
  updateTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransCostsMutationVariables = {
  input: DeleteTransCostsInput,
  condition?: ModelTransCostsConditionInput | null,
};

export type DeleteTransCostsMutation = {
  deleteTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTransCostsQueryVariables = {
  user_id: string,
  target_date: string,
};

export type GetTransCostsQuery = {
  getTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransCostsQueryVariables = {
  user_id?: string | null,
  target_date?: ModelStringKeyConditionInput | null,
  filter?: ModelTransCostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTransCostsQuery = {
  listTransCosts?:  {
    __typename: "ModelTransCostsConnection",
    items:  Array< {
      __typename: "TransCosts",
      user_id: string,
      target_date: string,
      created_at: string,
      updated_at: string,
      status: string,
      amount: number,
      comment?: string | null,
      details?:  Array< {
        __typename: "Details",
        seq: number,
        used_at: string,
        trans_mode: string,
        board_station?: string | null,
        getoff_station?: string | null,
        price: number,
        days?: number | null,
        is_round?: boolean | null,
        is_ticket?: boolean | null,
        note?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TransCostsByTarget_dateQueryVariables = {
  target_date: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransCostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TransCostsByTarget_dateQuery = {
  transCostsByTarget_date?:  {
    __typename: "ModelTransCostsConnection",
    items:  Array< {
      __typename: "TransCosts",
      user_id: string,
      target_date: string,
      created_at: string,
      updated_at: string,
      status: string,
      amount: number,
      comment?: string | null,
      details?:  Array< {
        __typename: "Details",
        seq: number,
        used_at: string,
        trans_mode: string,
        board_station?: string | null,
        getoff_station?: string | null,
        price: number,
        days?: number | null,
        is_round?: boolean | null,
        is_ticket?: boolean | null,
        note?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTransCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransCostsFilterInput | null,
};

export type OnCreateTransCostsSubscription = {
  onCreateTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransCostsFilterInput | null,
};

export type OnUpdateTransCostsSubscription = {
  onUpdateTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransCostsFilterInput | null,
};

export type OnDeleteTransCostsSubscription = {
  onDeleteTransCosts?:  {
    __typename: "TransCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "Details",
      seq: number,
      used_at: string,
      trans_mode: string,
      board_station?: string | null,
      getoff_station?: string | null,
      price: number,
      days?: number | null,
      is_round?: boolean | null,
      is_ticket?: boolean | null,
      note?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
