import { size } from 'lodash';

/**
 * This function checks if provided string value has provided minimum length
 *
 * @param value string | null
 * @param length number
 * @returns boolean
 */
export const hasLength = (value: string | null, length: number): boolean => size(value ?? '') >= length;
