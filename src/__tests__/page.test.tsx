import { render, screen } from '@testing-library/react';
import Home from '../app/page';


// Mock the ThemeContext
jest.mock('@/contexts/ThemeContext', () => ({
    useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
}));

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
        p: ({ children, ...props }: any) => <p {...props}>{children}
        </p>,
        button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
        section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    },
}));

describe('Home Page', () => {
    it('renders the main heading', () => {
        render(<Home />);

        expect(screen.getByText(/Hi there!/i)).toBeInTheDocument();
        expect(screen.getByText(/Milton Ngala/i)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    });

    it('renders call to action buttons', () => {
        render(<Home />);

        expect(screen.getByText(/See My Work/i)).toBeInTheDocument();
        expect(screen.getByText(/Book a Consultation/i)).toBeInTheDocument();
    });
});
