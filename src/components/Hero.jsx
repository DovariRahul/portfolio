import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import rahulImage from './rahul.jpg';

const Hero = () => {
    const sentence = "Hi I am RAHUL";
    const words = sentence.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Adjust delay between words
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="home" className="section flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingTop: '8rem' }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '5rem',
                left: '2.5rem',
                width: '18rem',
                height: '18rem',
                backgroundColor: 'var(--primary)',
                borderRadius: '9999px',
                filter: 'blur(100px)',
                opacity: 0.2,
                animation: 'pulse-glow 5s infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '5rem',
                right: '2.5rem',
                width: '24rem',
                height: '24rem',
                backgroundColor: 'var(--secondary)',
                borderRadius: '9999px',
                filter: 'blur(100px)',
                opacity: 0.2,
                animation: 'pulse-glow 7s infinite'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                >
                    <span className="glass-panel" style={{
                        color: 'var(--primary)',
                        fontWeight: 600,
                        fontSize: '1.125rem',
                        marginBottom: '1rem',
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px'
                    }}>
                        Available for Work
                    </span>
                    <h1 style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                style={{ display: 'inline-block' }}
                                className={word === "RAHUL" ? "gradient-text" : ""}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
                        Aspiring ML engineer skilled in Python and Flask, Exploring Deep learning & NLP ,passionate about building data-driven solutions and expanding expertise in machine learning and model deployment.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={20} />
                        </a>
                        <a href="/resume.pdf" download className="btn btn-outline">
                            Resume <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1/1' }}>
                        <div className="animate-float" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top right, var(--primary), var(--secondary))',
                            borderRadius: '50%',
                            transform: 'rotate(6deg)',
                            opacity: 0.3,
                            zIndex: 0
                        }}></div>
                        <div className="glass-panel" style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            zIndex: 1
                        }}>
                            <img
                                src={rahulImage}
                                alt="Coding Workspace"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center 30%',
                                    opacity: 0.9,
                                    transition: 'transform 0.7s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                            </img>
                        </div>

                        {/* Floating Badge 1 - Replaced with skills/enthusiasm since no experience */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-panel"
                            style={{
                                position: 'absolute',
                                bottom: '-1.5rem',
                                left: '-1.5rem',
                                padding: '1rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                zIndex: 2
                            }}
                        >
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '9999px',
                                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                fontWeight: 'bold'
                            }}>
                                <span>🚀</span>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: 0 }}>Ready to</p>
                                <p style={{ fontWeight: 'bold', color: 'white', margin: 0 }}>Innovate</p>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="glass-panel"
                            style={{
                                position: 'absolute',
                                top: '-1.5rem',
                                right: '-1.5rem',
                                padding: '1rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                zIndex: 2
                            }}
                        >
                            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)', animation: 'pulse-glow 2s infinite' }}></div>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>Open to Work</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
