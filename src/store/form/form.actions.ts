import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { FormView } from '../../model/enum/FormView';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';

const PREFIX = 'FORM';

export const setFormView: ActionCreatorWithPayload<FormView> = createAction(`${PREFIX}_SET_FORM_VIEW`);

export const goToPrivacyView: ActionCreatorWithoutPayload = createAction(`${PREFIX}_GO_PRIVACY`);

export const setFormField: ActionCreatorWithPayload<UpdateFormFieldPayload> = createAction(`${PREFIX}_SET_FORM_FIELD`);

export const setTouched: ActionCreatorWithoutPayload = createAction(`${PREFIX}_SET_TOUCHED`);
