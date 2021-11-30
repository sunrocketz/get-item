const { RollupOptions } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

/** @type {RollupOptions} */
const configs = {
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
  plugins: [typescript(), terser({ keep_fnames: true, keep_classnames: true })],
}

module.exports = configs
