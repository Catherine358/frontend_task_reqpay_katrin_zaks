import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from "./reducers/reducer";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
    order: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
