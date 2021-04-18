import { isEmpty, isNil } from 'lodash';

export const isDefined = (value: string | null): boolean => !isEmpty(value) && !isNil(value);
