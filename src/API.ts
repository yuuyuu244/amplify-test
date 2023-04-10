/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransportationCostsInput = {
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

export type ModelTransportationCostsConditionInput = {
  user_id?: ModelIDInput | null,
  target_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelTransportationCostsConditionInput | null > | null,
  or?: Array< ModelTransportationCostsConditionInput | null > | null,
  not?: ModelTransportationCostsConditionInput | null,
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

export type transportationCosts = {
  __typename: "transportationCosts",
  user_id: string,
  target_date: string,
  created_at: string,
  updated_at: string,
  status: string,
  amount: number,
  comment?: string | null,
  details?:  Array<details | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type details = {
  __typename: "details",
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

export type UpdateTransportationCostsInput = {
  user_id: string,
  target_date: string,
  created_at?: string | null,
  updated_at?: string | null,
  status?: string | null,
  amount?: number | null,
  comment?: string | null,
  details?: Array< DetailsInput | null > | null,
};

export type DeleteTransportationCostsInput = {
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

export type ModelTransportationCostsFilterInput = {
  user_id?: ModelIDInput | null,
  target_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelTransportationCostsFilterInput | null > | null,
  or?: Array< ModelTransportationCostsFilterInput | null > | null,
  not?: ModelTransportationCostsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTransportationCostsConnection = {
  __typename: "ModelTransportationCostsConnection",
  items:  Array<transportationCosts | null >,
  nextToken?: string | null,
};

export type ModeltransportationCostsFilterInput = {
  user_id?: ModelIDInput | null,
  target_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModeltransportationCostsFilterInput | null > | null,
  or?: Array< ModeltransportationCostsFilterInput | null > | null,
  not?: ModeltransportationCostsFilterInput | null,
};

export type ModeltransportationCostsConnection = {
  __typename: "ModeltransportationCostsConnection",
  items:  Array<transportationCosts | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTransportationCostsFilterInput = {
  user_id?: ModelSubscriptionIDInput | null,
  target_date?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransportationCostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransportationCostsFilterInput | null > | null,
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

export type CreateTransportationCostsMutationVariables = {
  input: CreateTransportationCostsInput,
  condition?: ModelTransportationCostsConditionInput | null,
};

export type CreateTransportationCostsMutation = {
  createTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type UpdateTransportationCostsMutationVariables = {
  input: UpdateTransportationCostsInput,
  condition?: ModelTransportationCostsConditionInput | null,
};

export type UpdateTransportationCostsMutation = {
  updateTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type DeleteTransportationCostsMutationVariables = {
  input: DeleteTransportationCostsInput,
  condition?: ModelTransportationCostsConditionInput | null,
};

export type DeleteTransportationCostsMutation = {
  deleteTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type GetTransportationCostsQueryVariables = {
  user_id: string,
  target_date: string,
};

export type GetTransportationCostsQuery = {
  getTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type ListTransportationCostsQueryVariables = {
  user_id?: string | null,
  target_date?: ModelStringKeyConditionInput | null,
  filter?: ModelTransportationCostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTransportationCostsQuery = {
  listTransportationCosts?:  {
    __typename: "ModelTransportationCostsConnection",
    items:  Array< {
      __typename: "transportationCosts",
      user_id: string,
      target_date: string,
      created_at: string,
      updated_at: string,
      status: string,
      amount: number,
      comment?: string | null,
      details?:  Array< {
        __typename: "details",
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

export type TransportationCostsByTarget_dateQueryVariables = {
  target_date: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModeltransportationCostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TransportationCostsByTarget_dateQuery = {
  transportationCostsByTarget_date?:  {
    __typename: "ModeltransportationCostsConnection",
    items:  Array< {
      __typename: "transportationCosts",
      user_id: string,
      target_date: string,
      created_at: string,
      updated_at: string,
      status: string,
      amount: number,
      comment?: string | null,
      details?:  Array< {
        __typename: "details",
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

export type OnCreateTransportationCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransportationCostsFilterInput | null,
};

export type OnCreateTransportationCostsSubscription = {
  onCreateTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type OnUpdateTransportationCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransportationCostsFilterInput | null,
};

export type OnUpdateTransportationCostsSubscription = {
  onUpdateTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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

export type OnDeleteTransportationCostsSubscriptionVariables = {
  filter?: ModelSubscriptionTransportationCostsFilterInput | null,
};

export type OnDeleteTransportationCostsSubscription = {
  onDeleteTransportationCosts?:  {
    __typename: "transportationCosts",
    user_id: string,
    target_date: string,
    created_at: string,
    updated_at: string,
    status: string,
    amount: number,
    comment?: string | null,
    details?:  Array< {
      __typename: "details",
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
