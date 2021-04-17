import { FormField } from './FormField';

export type ValidationResult = {
  [field in FormField]?: string | null;
};
