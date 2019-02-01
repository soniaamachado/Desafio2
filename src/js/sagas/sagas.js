import { fork } from 'redux-saga/effects';
import mySagaArticles from './index';
import mySagaUsers from './users';


export default function* rootSaga () {
    yield [
        fork(mySagaArticles),
        fork(mySagaUsers),
    ];
}
