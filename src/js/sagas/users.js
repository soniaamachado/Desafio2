import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_USER, USER_FETCH_SUCCEEDED, USER_FETCH_ERROR } from '../constants/action-types'


import {USER_ENDPOINT} from "../constants/services";

function fetchAll() {
    return fetch(USER_ENDPOINT).then(response => response.json(), );
}

function* fetchUser() {
    try {
        const user = yield call(fetchAll);
        yield put({type: USER_FETCH_SUCCEEDED, payload: user});
    } catch (e) {
        yield put({type: USER_FETCH_ERROR, message: e.message});
    }
}

function* mySagaUsers() {
    yield takeLatest(FETCH_USER, fetchUser);
}

export default mySagaUsers;