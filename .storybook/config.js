import { configure } from '@storybook/react' //Jan fragen, wie ich sowas einbinde
/*import { addDecorator } from '@storybook/react';

addDecorator(s => <><GlobalStyle />{s()}</>);*/ // automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module)
