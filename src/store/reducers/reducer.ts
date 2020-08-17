import { OrderInitialStateType } from "../../types/reducers-types";
import { OrderActionTypes } from "../../types/actions-types";

const order = {
  generalInformation: {
    divisionCode: 0,
    specificationCode: 0,
    subcontractDescription: '',
    subcontractNickname: '',
    age: '',
    author: '',
    description: ''
  },
  details: {
    categories: '',
    status: '',
    statusChange: '',
    reason: '',
    modified: ''
  },
  scheduleImpact: {
    scheduleImpact: false,
    numberOfDays: 0,
    costOfImpact: 0
  },
  submittedCosts: {
    costs: 0,
    date: '',
    insurance: 0,
    bond: 0,
    GC: 0,
    GCAmount: 0,
    totalCost: 0
  },
  revisedCosts: {
    costs: 0,
    date: '',
    insurance: 0,
    bond: 0,
    GC: 0,
    GCAmount: 0,
    totalCost: 0
  },
  approvedCosts: {
    costs: 0,
    date: '',
    insurance: 0,
    bond: 0,
    GC: 0,
    GCAmount: 0,
    totalCost: 0
  }
};

const initialState: OrderInitialStateType = {
  order: order,
  error: ''
};

export default (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case "FETCH_ORDER_REQUEST":
      return {
        order: order,
        error: ''
      };
    case "FETCH_ORDER_SUCCESS":
      return {
        order: action.payload,
        error: ''
      };
    case "FETCH_ORDER_FAILURE":
      return {
        order: order,
        error: action.payload
      };
    default: return state;
  }
};
