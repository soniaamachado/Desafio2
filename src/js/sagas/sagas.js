import { fork } from 'redux-saga/effects';
import mySagaArticles from './index';
import mySagaUsers from './users';


export default function* rootSaga () {
    yield [
        fork(mySagaArticles), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(mySagaUsers),
    ];
}
