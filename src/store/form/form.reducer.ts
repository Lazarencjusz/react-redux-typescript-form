import { createReducer } from '@reduxjs/toolkit';
import { FormView } from '../../model/enum/FormView';
import { setFormView } from './form.actions';

export interface InitialState {
  currentView: FormView;
}

export const initialState: InitialState = {
  currentView: FormView.user,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setFormView, (state, action) => {
    state.currentView = action.payload;
  });
});
