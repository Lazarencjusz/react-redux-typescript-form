import { map } from 'lodash';
import { all, fork } from 'redux-saga/effects';
import { watchGoToDoneView } from './watchGoToDoneView';
import { watchGoToPrivacyView } from './watchGoToPrivacyView';

const allSagas = [watchGoToPrivacyView, watchGoToDoneView];

export function* rootSaga(): Generator {
  yield all(map(allSagas, fork));
}
