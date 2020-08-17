import {
    FETCH_ORDER_FAILURE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    OrderActionTypes
} from "../../types/actions-types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { Order } from "../../types/reducers-types";
import OrderClass from "../../modules/order";
import { order } from "../../modules/fake-order";
import { RootState } from "../store";

const requestOrder = (): OrderActionTypes => {
    return {
        type: FETCH_ORDER_REQUEST
    }
};

const loadOrder = (order: Order): OrderActionTypes => {
    return {
        type: FETCH_ORDER_SUCCESS,
        payload: order
    }
};

const fetchOrderFailed = (error: string): OrderActionTypes => {
  return {
      type: FETCH_ORDER_FAILURE,
      payload: error
  }
};

export const fetchOrder = (id: string): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch) => {
        dispatch(requestOrder());
        try {
            const response = await exampleAPI();
            const resData = await JSON.parse(response);
            dispatch(loadOrder(resData.order));
        } catch (error) {
            dispatch(fetchOrderFailed(error.message));
        }
    }
};

export const updateInformationDetail = (pieceOfInfoToUpdate: number, pieceOfInfoToBeUpdated: string): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch) => {
        try {
            const response = await exampleAPIUpdateOrder(pieceOfInfoToUpdate, pieceOfInfoToBeUpdated);
            const resData = await JSON.parse(response);
            dispatch(loadOrder(resData.order));
        } catch (error) {
            dispatch(fetchOrderFailed(error.message));
        }
    }
};

function exampleAPI() {
    return Promise.resolve(JSON.stringify(new OrderClass(new Date().toString(), order)));
}

function exampleAPIUpdateOrder(newValue: number, pieceOfInfoToBeUpdated: string) {
    switch (pieceOfInfoToBeUpdated) {
        case 'Insurance':
            return Promise.resolve(JSON.stringify(new OrderClass(new Date().toString(), {
                ...order,
                submittedCosts: {
                    ...order.submittedCosts,
                    insurance: newValue
                }
            })));
        case 'Number Of Days':
            return Promise.resolve(JSON.stringify(new OrderClass(new Date().toString(), {
                ...order,
                scheduleImpact: {
                    ...order.scheduleImpact,
                    numberOfDays: newValue
                }
            })));
        case 'Cost Of Impact':
            return Promise.resolve(JSON.stringify(new OrderClass(new Date().toString(), {
                ...order,
                scheduleImpact: {
                    ...order.scheduleImpact,
                    costOfImpact: newValue
                }
            })));
        default: return Promise.resolve(JSON.stringify(new OrderClass(new Date().toString(), order)));
    }

}
