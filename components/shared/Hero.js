import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,0,255,0.1)_0%,transparent_70%)]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The Future of
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Robotics Investment
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Own a piece of the future through tokenized robot shares. 
            Secure, transparent, and efficient investment in the robotics industry.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/marketplace">
              <button className="btn-primary flex items-center gap-2">
                Explore Robots <FiArrowRight />
              </button>
            </Link>
            <Link href="/presale">
              <button className="btn-secondary">
                Join Presale
              </button>
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: 'Total Value Locked', value: '$2.5M+' },
              { label: 'Active Robots', value: '50+' },
              { label: 'Token Holders', value: '1,200+' },
              { label: 'Monthly Revenue', value: '$100K+' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
