import { size } from 'lodash';

export const hasLength = (value: string | null, length: number): boolean => size(value ?? '') >= length;
