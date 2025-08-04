import type { CssVariable } from './css';

declare module 'react' {
  interface CSSProperties {
    [key: CssVariable]: string | number;
  }
}
