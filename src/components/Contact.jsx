import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/rahuldovari90@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `From: ${formData.email}\n\nMessage:\n${formData.message}`,
                    _subject: `New Contact from ${formData.name}`,
                    _replyto: formData.email, // Explicitly setting reply-to
                    _autoresponse: "Thank you for your message! I will get back to you soon."
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section relative">
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                width: '18rem',
                height: '18rem',
                backgroundColor: 'var(--primary)',
                borderRadius: '9999px',
                filter: 'blur(100px)',
                opacity: 0.1,
                zIndex: 0
            }}></div>

            <div className="container relative z-10">
                <div className="grid-cols-1 md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="text-muted mb-8 text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="p-3 glass-panel rounded-full text-primary" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <p className="text-sm text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email</p>
                                    <a href="mailto:rahuldovari90@gmail.com" style={{ fontSize: '1.125rem', fontWeight: 600 }}>rahuldovari90@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="p-3 glass-panel rounded-full text-secondary" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <p className="text-sm text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Location</p>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Vijayawada, Andhra Pradesh</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4" style={{ marginBottom: '1rem' }}>Follow Me</h3>
                            <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://github.com/DovariRahul" className="social-link" aria-label="GitHub">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/rahul-dovari-912761354/" className="social-link" aria-label="LinkedIn">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-8"
                        style={{ padding: '2rem' }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        backgroundColor: 'var(--bg-dark)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'var(--text-light)',
                                        width: '100%',
                                        outline: 'none',
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>
                            <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    disabled={isSubmitting}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        backgroundColor: 'var(--bg-dark)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'var(--text-light)',
                                        width: '100%',
                                        outline: 'none',
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>
                            <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Your message..."
                                    disabled={isSubmitting}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        backgroundColor: 'var(--bg-dark)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'var(--text-light)',
                                        resize: 'vertical',
                                        width: '100%',
                                        outline: 'none',
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                ></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <div style={{ color: '#4ade80', fontSize: '0.9rem', textAlign: 'center' }}>
                                    Message sent successfully!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} style={{ marginRight: '0.5rem' }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} style={{ marginLeft: '0.5rem' }} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
