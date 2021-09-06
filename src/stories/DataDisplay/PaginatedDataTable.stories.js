import React from 'react';

import PaginatedDataTable from '../../components/DataDisplay/PaginatedDataTable';

import {
  sampleCredentials,
  sampleCredentialsTableConfig,
} from '../../test/DataDisplay/PaginatedDataTable.data';

export default {
  title: 'Data Display/PaginatedDataTable',
  component: PaginatedDataTable,
  argTypes: { 
    updateConfig: { action: 'updateConfig' },
    onRowClick: { action: 'rowClicked' },
  },
};

const Default = (args) => <PaginatedDataTable {...args} />;

export const Primary = Default.bind({});
Primary.args = {
  data: sampleCredentials.splice(0,5),
  dataConfig: sampleCredentialsTableConfig,
  count: sampleCredentials.length,
};

export const Dense = Default.bind({});
Dense.args = {
  data: sampleCredentials.splice(0,5),
  dataConfig: sampleCredentialsTableConfig,
  count: sampleCredentials.length,
  dense: true,
};