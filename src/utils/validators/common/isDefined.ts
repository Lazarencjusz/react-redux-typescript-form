import { isEmpty, isNil } from 'lodash';

/**
 * This function check if provided string value has any walue
 *
 * @param value string | null
 * @returns boolean
 */
export const isDefined = (value: string | null): boolean => !isEmpty(value) && !isNil(value);
