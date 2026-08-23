import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

// Mock usePathname
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

// ThemeContext exports: default export is useTheme hook, ThemeProvider is named
jest.mock('@/contexts/ThemeContext', () => {
    const useTheme = () => ({ theme: 'light', toggleTheme: jest.fn() });
    useTheme.default = useTheme; // satisfy both import styles
    return {
        __esModule: true,
        default: useTheme,
        ThemeProvider: ({ children }: any) => <>{children}</>,
    };
});

// Mock framer-motion — include all used exports
jest.mock('framer-motion', () => ({
    motion: {
        div:    ({ children, ...props }: any) => <div {...props}>{children}</div>,
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
        nav:    ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
        button: ({ children, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
        span:   ({ children, ...props }: any) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useReducedMotion: () => false,
}));

describe('Header', () => {
    it('renders navigation links', () => {
        render(<Header />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('Tech Stack')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders the logo image', () => {
        render(<Header />);
        // Logo is now an <img> (next/image mock), identified by alt text
        expect(screen.getByAltText('Milton Ngala')).toBeInTheDocument();
    });
});
