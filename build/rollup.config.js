import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'MapPromisified',
      file: 'dist/map-promisified.esm.js',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      commonjs(),
    ],
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'MapPromisified',
      file: 'dist/map-promisified.js',
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      commonjs(),
    ],
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'MapPromisified',
      file: 'dist/map-promisified.cjs.js',
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      commonjs(),
    ],
  },
];
