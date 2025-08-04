export type SetElementCssVariableData = {
  element: HTMLElement;
  name: string;
  value: string;
};

export type SetElementCssVariable = (data: SetElementCssVariableData) => void;
