import { motion } from 'framer-motion';

const WorkInquiry = () => {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20rem',
                        height: '20rem',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '9999px',
                        filter: 'blur(80px)',
                        opacity: 0.2,
                        zIndex: 0
                    }}></div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Interested in collaborating?
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-4">
                            If you want any doubts and any technical works and interships please contact through the email and provides links.
                        </p>

                        <a
                            href="mailto:rahuldovari90@gmail.com"
                            className="btn btn-primary"
                        >
                            Contact via Email
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkInquiry;
