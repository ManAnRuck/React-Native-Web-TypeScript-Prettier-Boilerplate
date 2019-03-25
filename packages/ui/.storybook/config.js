import { configure, addDecorator } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';
import { withA11y } from '@storybook/addon-a11y';


const req = require.context("../src", true, /.story\.tsx$/);

addDecorator(withA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

