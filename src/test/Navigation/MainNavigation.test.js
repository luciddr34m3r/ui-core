import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import MainNavigation from '../../components/Navigation/MainNavigation';

import { testPages, testTitle } from './MainNavigation.data';

describe('<MainNavigation />', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <MainNavigation pages={testPages} title={testTitle} />
      </MemoryRouter>);
  })
});