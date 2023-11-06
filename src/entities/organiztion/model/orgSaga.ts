import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_ORG_REPOS_BY_NAME, PAGINATE_TABLE, setOrg } from './orgReducer';
import { getOrganizationReposByName, paginateTable } from '../api';
import { GeneratorFetchOrg } from '../types';

function* fetchOrgWorker({ payload }: ReturnType<typeof setOrg>): GeneratorFetchOrg {
  try {
    const repos = yield call(getOrganizationReposByName, payload.name);
    yield put(setOrg({ name: payload.name, repos, error: false, page: 1 }));
  } catch (e) {
    yield put(setOrg({ name: payload.name, repos: [], error: true, page: 1 }));
  }
}

function* paginateTableWorker({ payload }: ReturnType<typeof setOrg>): GeneratorFetchOrg {
  try {
    const repos = yield call(paginateTable, payload.name, payload.page);
    if (repos.length === 0) {
      yield put(setOrg({ name: payload.name, error: false, page: payload.page }));
    } else {
      yield put(setOrg({ name: payload.name, repos, error: false, page: payload.page }));
    }
  } catch (e) {
    yield put(setOrg({ name: payload.name, repos: [], error: true, page: payload.page }));
  }
}

export function* orgWatcher() {
  yield takeEvery(FETCH_ORG_REPOS_BY_NAME, fetchOrgWorker);
  yield takeEvery(PAGINATE_TABLE, paginateTableWorker);
}
