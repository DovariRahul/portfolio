
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import rahulImage from './rahul.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                zIndex: 50,
                padding: scrolled ? '0.5rem 0' : '1rem 0',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container nav-container">
                {/* Logo */}
                <a href="#home" className="nav-logo">
                    Portfolio
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Circular Profile Image (Top Right) */}
                    <div className="profile-img-container">
                        <img
                            src={rahulImage}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu glass-panel">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="nav-link"
                            style={{ fontSize: '1.25rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="profile-img-container" style={{ width: '60px', height: '60px', marginLeft: 0 }}>
                        <img
                            src="/trip_planner.jpg"
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
