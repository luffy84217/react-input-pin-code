import path from 'node:path';
import { fileURLToPath } from 'node:url';

import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import nodeResolve from '@rollup/plugin-node-resolve';
import { glob } from 'glob';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript2 from 'rollup-plugin-typescript2';

// import { generateScopedName } from './.rollup/postcss';

const config = async () => {
  const indexTsFileList = await glob('./src/**/index.ts');
  const indexInput = Object.fromEntries(
    indexTsFileList.map(filename => [
      path.relative(
        'src',
        filename.slice(0, filename.length - path.extname(filename).length),
      ),
      fileURLToPath(new URL(filename, import.meta.url)),
    ]),
  );
  const tsconfigBuildFilename = 'tsconfig.build.json';

  return defineConfig([
    {
      input: indexInput,
      output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        sourcemap: true,
      },
      plugins: [
        peerDepsExternal(),
        nodeResolve(),
        commonjs(),
        image(),
        postcss({
          extract: false,
          sourceMap: true,
          use: ['sass'],
          modules: true,
          autoModules: false,
        }),
        typescript2({
          tsconfig: tsconfigBuildFilename,
        }),
        del({
          targets: 'dist/*',
        }),
        copy({
          targets: [
            {
              src: 'src/styles',
              dest: 'dist',
            },
          ],
        }),
      ],
      external: ['react', 'react-dom'],
    },
    {
      input: indexInput,
      output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      },
      plugins: [
        nodeResolve(),
        commonjs(),
        dts({
          tsconfig: tsconfigBuildFilename,
        }),
      ],
    },
  ]);
};

export default config;
