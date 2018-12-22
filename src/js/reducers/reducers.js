import { fork } from 'redux-saga/effects';
import userReducer from './user';
import articleReducer from './index';



export default function* rootReducer () {
    yield [
        fork(userReducer),
        fork(articleReducer), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    ];
}
