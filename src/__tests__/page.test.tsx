import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock ThemeContext
jest.mock('@/contexts/ThemeContext', () => ({
  __esModule: true,
  default: () => ({ theme: 'light', toggleTheme: jest.fn() }),
  ThemeProvider: ({ children }: any) => <>{children}</>,
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

// Mock framer-motion — include all hooks/components used by page.tsx
jest.mock('framer-motion', () => ({
  motion: {
    div:     ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1:      ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2:      ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p:       ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button:  ({ children, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
    header:  ({ children, ...props }: any) => <header {...props}>{children}</header>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    a:       ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
    span:    ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useReducedMotion: () => false,
}));

// Stub heavy child components so the test focuses on the hero content only
jest.mock('@/components/FloatingElements', () => ({ __esModule: true, default: () => null }));
jest.mock('@/components/TechTags',        () => ({ __esModule: true, default: () => null }));
jest.mock('@/components/WorkSection',     () => ({ __esModule: true, default: () => null }));
jest.mock('@/components/ValueProposition',() => ({ __esModule: true, default: () => null }));
jest.mock('@/components/About',           () => ({ __esModule: true, default: () => null }));

describe('Home Page', () => {
  it('renders the primary headline', () => {
    render(<Home />);
    // H1 contains the dual-audience headline
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Enterprise Backend Architect/i)).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Home />);
    expect(screen.getAllByText(/Milton Ngala/i).length).toBeGreaterThan(0);
  });

  it('renders the availability badge', () => {
    render(<Home />);
    expect(screen.getByText(/Available for new projects/i)).toBeInTheDocument();
  });

  it('renders the enterprise consulting card', () => {
    render(<Home />);
    expect(screen.getByText(/Enterprise Consulting/i)).toBeInTheDocument();
  });

  it('renders the full-stack MVPs card', () => {
    render(<Home />);
    // Text appears in both hero card and the #project-planner section — getAllBy is correct
    expect(screen.getAllByText(/Full-Stack MVPs/i).length).toBeGreaterThan(0);
  });

  it('renders the book a call link', () => {
    render(<Home />);
    expect(screen.getByText(/Book a call/i)).toBeInTheDocument();
  });
});
