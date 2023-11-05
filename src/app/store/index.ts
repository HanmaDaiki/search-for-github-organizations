import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import orgReducer from '@entities/organiztion/model/orgReducer';
import { orgWatcher } from '@entities/organiztion/model/orgSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootWatcher() {
  yield all([orgWatcher()]);
}

const rootReducer = combineReducers({
  org: orgReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
