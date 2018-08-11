import api from 'services/api';
import { call, put, actionChannel } from 'redux-saga/effects';

import { Creators as SearchActions } from 'store/ducks/search';

export function* search() {
  try {
    const response = yield call(api.get, `/songs?q=${actionChannel.payload.term}`);

    yield put(SearchActions.searchSuccess(response.data));
  } catch (error) {
    yield put(SearchActions.searchFailure('Erro ao buscar músicas da API'));
  }
}
