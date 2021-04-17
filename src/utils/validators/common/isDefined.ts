import { isEmpty, isNil } from 'lodash';

export const isDefined = (value: string): boolean => !isEmpty(value) && !isNil(value);
