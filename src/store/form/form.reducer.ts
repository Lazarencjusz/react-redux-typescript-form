import { createReducer } from '@reduxjs/toolkit';
import { FormView } from '../../model/enum/FormView';
import { AppFormData } from '../../model/form/AppFormData';
import { setFormField, setFormView, setTouched } from './form.actions';

export interface InitialState {
  currentView: FormView;
  data: AppFormData;
  touched: boolean;
}

export const initialState: InitialState = {
  currentView: FormView.user,
  data: { email: '', name: '', password: '', role: '', updates: true, communication: false },
  touched: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setFormView, (state, action) => {
    state.currentView = action.payload;
  });
  builder.addCase(setFormField, (state, action) => {
    const { field, value } = action.payload;
    state.data = { ...state.data, [field]: value };
  });
  builder.addCase(setTouched, (state) => {
    state.touched = true;
  });
});
