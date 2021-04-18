import produce from 'immer';
import { FormView } from '../../../model/enum/FormView';
import { FormField } from '../../../model/form/FormField';
import { UpdateFormFieldPayload } from '../../../model/form/UpdateFormFieldPayload';
import { setFormField, setFormView, setTouched } from '../form.actions';
import { InitialState, initialState, reducer } from '../form.reducer';

describe('form.reducer', () => {
  let state: InitialState;

  beforeEach(() => {
    state = initialState;
  });
  test('"setFormView" should change state', () => {
    //given
    const currentView: FormView = FormView.done;
    const expectedState = produce(initialState, () => ({ currentView }));

    // when
    const result = reducer(state, setFormView(currentView));

    // then
    expect(result).toMatchObject(expectedState);
  });
  test('"setFormField" should change state', () => {
    //given
    const value = 'new value';
    const payload: UpdateFormFieldPayload = { field: FormField.name, value };
    const expectedState = produce(initialState, () => ({ data: { name: value } }));

    // when
    const result = reducer(state, setFormField(payload));

    // then
    expect(result).toMatchObject(expectedState);
  });
  test('"setTouched" should change state', () => {
    //given
    const touched = true;
    const expectedState = produce(initialState, () => ({ touched }));

    // when
    const result = reducer(state, setTouched());

    // then
    expect(result).toMatchObject(expectedState);
  });
});
