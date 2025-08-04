import '@testing-library/jest-dom/jest-globals';

import JestDomResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = JestDomResizeObserver;
