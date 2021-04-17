import { FormView } from '../model/enum/FormView';

export const formStepsPath: Map<FormView, FormView> = new Map([
  [FormView.user, FormView.privacy],
  [FormView.privacy, FormView.done],
  [FormView.done, FormView.done],
]);
