import { useCallback } from 'react';

import { setElementCssVariable } from '../../utils/css';
import type { Hook, SetCssVariable } from './types';

export const useCssVariable: Hook = ({ targetElRef }) => {
  const setCssVariable: SetCssVariable = useCallback((name, value) => {
    const { current: targetEl } = targetElRef;

    if (!targetEl) {
      return;
    }

    setElementCssVariable({
      element: targetEl,
      name,
      value,
    });
  }, [targetElRef]);

  return {
    setCssVariable,
  };
};
