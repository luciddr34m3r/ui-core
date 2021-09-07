import React from 'react';

import { ActionList } from '../../components/DataDisplay/ActionList';

import { items, actions } from '../../test/DataDisplay/ActionList.data';

export default {
  title: 'Data Display/ActionList',
  component: ActionList,
  argTypes: {
    onRowClick: { action: 'rowClicked' },
  },
};

const Default = (args) => <ActionList {...args} />;

export const Primary = Default.bind({});
Primary.args = {
  items: items,
  actions: actions,
};

export const AsButtons = Default.bind({});
AsButtons.args = {
  items: items,
  actions: actions,
  listItemProps: {
    button: true,
  }
};

export const Dense = Default.bind({});
Dense.args = {
  items: items,
  actions: actions,
  listItemProps: {
    button: true,
  },
  dense: true,
};