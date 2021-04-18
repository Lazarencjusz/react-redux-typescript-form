import { render, screen } from '@testing-library/react';
import React from 'react';
import { DoneView } from '../DoneView';

describe('<DoneView />', () => {
  test('should render correct view', async () => {
    // given
    render(<DoneView />);

    // when
    const viewElement = await screen.findByText(
      'Please verify your email address, you should have received an email from us already!',
    );

    // then
    expect(viewElement).toBeTruthy();
  });
});
