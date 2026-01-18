import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

// Mock usePathname
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

// Mock ThemeContext
jest.mock('@/contexts/ThemeContext', () => ({
    useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
        nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
        button: ({ children, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
    },
}));

describe('Header', () => {
    it('renders navigation links', () => {
        render(<Header />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('Tech')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders the logo text', () => {
        render(<Header />);
        expect(screen.getByText('Milton Ngala')).toBeInTheDocument();
    });
});
