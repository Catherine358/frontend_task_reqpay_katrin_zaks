import { Order } from "./reducers-types";

export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';

interface FetchOrderRequestAction {
    type: typeof FETCH_ORDER_REQUEST
}

interface FetchOrderSuccessAction {
    type: typeof FETCH_ORDER_SUCCESS,
    payload?: Order
}

interface FetchOrderFailureAction {
    type: typeof FETCH_ORDER_FAILURE,
    payload?: string
}

export type OrderActionTypes =
    FetchOrderRequestAction |
    FetchOrderSuccessAction |
    FetchOrderFailureAction;
