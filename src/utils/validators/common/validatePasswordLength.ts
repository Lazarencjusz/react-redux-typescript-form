import { size } from 'lodash';

export const haveLength = (value: string, length: number): boolean => size(value) >= length;
