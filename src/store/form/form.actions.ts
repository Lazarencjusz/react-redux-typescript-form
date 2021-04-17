import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { FormView } from '../../model/enum/FormView';

const PREFIX = 'FORM';

export const setFormView: ActionCreatorWithPayload<FormView> = createAction(`${PREFIX}_SET_FORM_VIEW`);
export const goNextView: ActionCreatorWithoutPayload = createAction(`${PREFIX}_GO_NEXT_STEP`);
