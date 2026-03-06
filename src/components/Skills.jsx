


import { motion } from 'framer-motion';
import { Brain, Code, Database } from 'lucide-react';

const skillsData = [
    {
        category: 'Data Science & ML',
        icon: <Brain className="w-8 h-8 text-secondary" />,
        skills: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Flask', 'MediaPipe', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
        category: 'Full Stack Development',
        icon: <Code className="w-8 h-8 text-primary" />,
        skills: ['React', 'Next.js', 'Node.js', 'Java', 'Tailwind CSS', 'DSA', 'Framer Motion']
    },
    {
        category: 'Data Handling & DevOps',
        icon: <Database className="w-8 h-8 text-accent" />,
        skills: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Docker', 'AWS', 'MongoDB']
    }
];



const Skills = () => {
    return (
        <section id="skills" className="section relative overflow-hidden">
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, rgba(15, 23, 42, 0) 70%)',
                opacity: 0.5,
                zIndex: 0
            }}></div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        I constantly learn and adapt to new technologies. Here is the tech stack I currently work with.
                    </p>
                </motion.div>

                <div className="grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                        >
                            <div
                                className="mb-6 p-4 rounded-full bg-white/5 border border-white/10"
                                style={{
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    borderRadius: '9999px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'inline-flex'
                                }}
                            >
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{category.category}</h3>

                            <div className="flex flex-wrap justify-center gap-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 rounded-lg bg-bg-dark-accent border border-white/5 text-sm font-medium hover:border-primary/50 transition-colors"
                                        style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            backgroundColor: 'var(--bg-dark-accent)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)'}
                                        onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
