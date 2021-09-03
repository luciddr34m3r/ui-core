import React from 'react';

import MainNavigation from '../../components/Navigation/MainNavigation';

import { testPages } from '../../test/Navigation/MainNavigation.data';

export default {
  title: 'Navigation/MainNavigation',
  component: MainNavigation,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <MainNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  pages: testPages,
  title: "My App",
};