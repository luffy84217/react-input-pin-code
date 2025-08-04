import type { RefObject } from 'react';

export type SetCssVariable = (name: string, value: string) => void;

export type Props = {
  targetElRef: RefObject<HTMLElement | null>;
};

export type Result = {
  setCssVariable: SetCssVariable;
};

export type Hook = (props: Props) => Result;
