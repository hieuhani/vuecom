import { configure } from '@storybook/vue'
import '!style-loader!css-loader!sass-loader!../src/styles/css-reset.scss'
import '!style-loader!css-loader!sass-loader!../src/styles/css-utilities.scss'

const req = require.context('../src', true, /.stories.ts$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
