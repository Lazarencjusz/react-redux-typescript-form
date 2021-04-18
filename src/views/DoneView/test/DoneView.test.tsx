import { render, screen } from '@testing-library/react';
import React from 'react';
import { DoneView } from '../DoneView';

describe('<DoneView />', () => {
  test('should render correct view', async () => {
    render(<DoneView />);

    const viewElement = await screen.findByText(
      'Please verify your email address, you should have received an email from us already!',
    );
    expect(viewElement).toBeTruthy();
  });
});
