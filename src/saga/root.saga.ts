import { map } from 'lodash';
import { all, fork } from 'redux-saga/effects';
import { watchGoNextView } from './goNextView.saga';

const allSagas = [watchGoNextView];

export function* rootSaga(): Generator {
  yield all(map(allSagas, fork));
}
