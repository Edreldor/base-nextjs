import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    prefetch: jest.fn(),
  }),
}));

describe('Blank test', () => {
  it('render title', () => {
    render(<h1>Title</h1>);

    const title = screen.getByText(/Title/i);

    expect(title).toBeInTheDocument();
  });
});
