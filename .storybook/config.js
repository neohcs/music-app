import { configure } from '@storybook/react' //Jan fragen, wie ich sowas einbinde // automatically import all files ending in *.stories.js
/*import { addDecorator } from '@storybook/react'

addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
)) */ configure(
  require.context('../src/', true, /\.stories\.js$/),
  module
)
