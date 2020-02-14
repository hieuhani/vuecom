import path from 'path'
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import typescript from '@rollup/plugin-typescript'

const resolv = p => path.resolve(__dirname, '../', p)

const plugins = [
  resolve({
    extensions: ['.ts', '.json', '.vue', '.scss'],
  }),
  scss({
    output: 'dist/vuecommerce-ui.css',
    prefix: `@import "../../../styles/functions";
             @import "../../../styles/variables";
             @import "../../../styles/mixins";
             @import "../../../styles/utilities";`
  }),
  commonjs(),
  typescript(),
  vue({
    css: false,
    data: {
      scss: `@import "../../../styles/functions";
             @import "../../../styles/variables";
             @import "../../../styles/mixins";`,
    },
  }),
  buble({ objectAssign: 'Object.assign' }),
]

export default [
  {
    input: resolv('src/index.ts'),
    output: [
      {
        format: 'es',
        file: resolv('dist/vuecommerce-ui.es.js'),
      },
      {
        format: 'cjs',
        file: resolv('dist/vuecommerce-ui.common.js'),
        // exports: 'named',
      },
      {
        format: 'iife',
        file: resolv('dist/vuecommerce-ui.iife.js'),
        name: 'vuecommerce',
        exports: 'named',
      },
    ],
    plugins,
  },
]
