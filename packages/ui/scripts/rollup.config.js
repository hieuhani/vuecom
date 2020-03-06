import path from 'path'
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import bundleScss from 'rollup-plugin-bundle-scss';
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import typescript from '@rollup/plugin-typescript'
import { dependencies } from '../package.json'

const externals = ['vue', ...Object.keys(dependencies)]

const resolv = p => path.resolve(__dirname, '../', p)


const baseConfig = {
  input: resolv('src/index.ts'),
  external: externals,
  plugins: [
    resolve({ external: ['vue'] }),
    scss({
      output: 'dist/vuecom-ui.css',
      prefix: `@import "../../../styles/functions";
               @import "../../../styles/variables";
               @import "../../../styles/mixins";
               @import "../../../styles/utilities";`
    }),
    commonjs(),
    typescript(),
    bundleScss({
      output: 'vuecom-ui.scss',
    }),
    vue({
      css: false,
      data: {
        scss: `@import "../../../styles/functions";
               @import "../../../styles/variables";
               @import "../../../styles/mixins";`,
      },
    }),
    buble({ objectAssign: 'Object.assign' }),
    commonjs(),
  ]
}

export default [
  {
    ...baseConfig,
    output: {
      format: 'es',
      file: resolv('dist/vuecom-ui.es.js'),
      sourcemap: true
    }
  }
]
