import { render, screen } from '@testing-library/react';
import ActionList from '../../components/DataDisplay/ActionList';

describe('<ActionList />', () => {
  it('should render', () => {
    render(<ActionList />);
  })
});