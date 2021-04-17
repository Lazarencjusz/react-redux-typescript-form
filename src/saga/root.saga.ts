import { map } from 'lodash';
import { all, fork } from 'redux-saga/effects';
import { watchGoToPrivacyView } from './watchGoToPrivacyView';

const allSagas = [watchGoToPrivacyView];

export function* rootSaga(): Generator {
  yield all(map(allSagas, fork));
}
