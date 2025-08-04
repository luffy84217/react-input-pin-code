import {
  SIZE_EXTRA_SMALL,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from '../../constants';
import type {
  SizeConfigMap,
} from './types';

export const sizeConfigMap: SizeConfigMap = {
  [SIZE_EXTRA_SMALL]: {
    className: 'isExSmall',
  },
  [SIZE_SMALL]: {
    className: 'isSmall',
  },
  [SIZE_MEDIUM]: {
    className: 'isMedium',
  },
  [SIZE_LARGE]: {
    className: 'isLarge',
  },
};
