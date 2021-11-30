const { RollupOptions } = require('rollup')
const dts = require('rollup-plugin-dts')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

/** @type {RollupOptions[]} */
const configs = [
  {
    input: 'index.ts',
    output: [
      {
        format: 'commonjs',
        file: 'dist/index.cjs',
        exports: 'default',
      },
      {
        format: 'esm',
        file: 'dist/index.js',
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      terser({ keep_fnames: true, keep_classnames: true }),
    ],
  },
]

module.exports = configs
