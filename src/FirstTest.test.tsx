import { render } from '@testing-library/react';
import { describe } from 'vitest';

import FirstTest from './FirstTest';

describe('Render the App', () => {
  it('should render the component App', () => {
    render(<FirstTest />);
    expect(true).toBeTruthy();
  });
});
