

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10" style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <p className="text-muted" style={{ color: 'var(--text-muted)' }}>
                    If you have any doubts, technical works, or internships, please contact through email and the links provided.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
