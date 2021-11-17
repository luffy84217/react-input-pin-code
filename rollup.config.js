import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkgJson from './package.json';

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
    ],
    external: [/@babel\/runtime/],
    output: [
      {
        file: pkgJson.main,
        format: 'cjs',
        globals: {
          react: 'React',
        },
      },
      {
        file: pkgJson.main.replace('.js', '.min.js'),
        format: 'cjs',
        globals: {
          react: 'React',
        },
        plugins: [terser()],
      },
    ],
  },
  // ESM
  {
    input: 'src/index.ts',
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      peerDepsExternal(),
      resolve(),
    ],
    output: [
      {
        file: pkgJson.module,
        format: 'esm',
        globals: {
          react: 'React',
        },
      },
      {
        file: pkgJson.module.replace('.js', '.min.js'),
        format: 'esm',
        globals: {
          react: 'React',
        },
        plugins: [terser()],
      },
    ],
  },
];
