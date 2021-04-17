import { combineReducers } from '@reduxjs/toolkit';
import { RootStore } from '../model/RootStore';
import { reducer as form } from './form/form.reducer';

export const reducer = combineReducers<RootStore>({
  form,
});
