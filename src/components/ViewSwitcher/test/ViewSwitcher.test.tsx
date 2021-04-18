import { render, screen } from '@testing-library/react';
import React from 'react';
import { ViewConfig } from '../../../model/ViewConfig';
import { ViewSwitcher } from '../ViewSwitcher';

describe('<ViewSwitcher />', () => {
  test('should render correct view', () => {
    // given
    const selectedView = 'view2';
    const label = 'View 2';
    const viewsConfig: ViewConfig = { view1: <div>View 1</div>, [selectedView]: <div>{label}</div> };

    // when
    render(<ViewSwitcher selectedView={selectedView} viewsConfig={viewsConfig} />);

    const viewElement = screen.findByText(label);

    // then
    expect(viewElement).toBeTruthy();
  });
});
