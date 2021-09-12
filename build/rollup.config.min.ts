import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

export const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license ${pkg.license}
*/`;

const plugins = [
  alias(),
  resolve({
    extensions: ['.js', '.ts'],
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions: ['.js', '.ts'],
    exclude: 'src/**',
    include: 'node_modules/**',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  terser(),
  beep(),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.unpkg,
      format: 'cjs',
      name: 'MapPromisified',
      exports: 'named',
      strict: true,
      sourcemap: true,
      banner,
    },
  ],
  plugins,
};
