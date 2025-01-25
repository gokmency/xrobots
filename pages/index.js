import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiLock, FiGlobe } from 'react-icons/fi';
import Web3Connect from '../components/Web3Connect';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ['Marketplace', 'Portfolio', 'Stats', 'Community'];

  return (
    <div className="min-h-screen bg-gradient">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-800/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <div className="flex items-center space-x-2">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  RWA
                </motion.h1>
                <motion.span 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-bold text-white"
                >
                  Platform
                </motion.span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer"
                    onClick={() => setActiveTab(item.toLowerCase())}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            {mounted && <Web3Connect />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            The Future of
            <br />
            <span className="text-white">Robotics Investment</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Own a piece of the future through tokenized robot shares. Secure, transparent, and efficient.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
              Explore NFTs <FiArrowRight />
            </button>
            <button className="px-8 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Token Share', value: '10%', desc: '1 Token = 1/10 Robot' },
              { title: 'Revenue Share', value: '70%', desc: 'Direct profit sharing' },
              { title: 'Annual Yield', value: '25%', desc: 'Average APY return' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="stat-card text-center p-8"
              >
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-4xl font-bold mb-2">{item.value}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Robots</h2>
            <div className="flex gap-4">
              {['all', 'trending', 'new', 'sold'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`filter-chip ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="nft-grid">
            {/* NFT cards will be mapped here */}
          </div>
        </div>
      </section>
    </div>
  );
}
