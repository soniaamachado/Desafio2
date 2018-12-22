import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import rootReducer from "../reducers/reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;