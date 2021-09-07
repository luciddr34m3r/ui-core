import { render } from '@testing-library/react';
import PaginatedDataTable from '../../components/DataDisplay/PaginatedDataTable';

import {
  sampleCredentials,
  sampleCredentialsTableConfig,
} from './PaginatedDataTable.data';

describe('<PaginatedDataTable />', () => {
  it('should render', () => {
    render(<PaginatedDataTable data={sampleCredentials.splice(0,5)} dataConfig={sampleCredentialsTableConfig} count={5} />);
  })
});