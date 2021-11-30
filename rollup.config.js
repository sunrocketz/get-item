const { RollupOptions } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

/** @type {RollupOptions} */
const configs = {
  input: 'main.ts',
  output: [
    {
      format: 'commonjs',
      file: 'dist/main.cjs',
      exports: 'default',
    },
    {
      format: 'es',
      file: 'dist/main.js',
    },
  ],
  plugins: [typescript(), terser()],
}

module.exports = configs
