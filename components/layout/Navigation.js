import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Web3Connect from '../Web3Connect';

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Presale', href: '/presale' },
    { name: 'About', href: '/about' },
    { name: 'Roadmap', href: '/roadmap' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-800/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  RWA
                </span>
                <span className="text-2xl font-bold text-white ml-2">Platform</span>
              </motion.div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      router.pathname === item.href ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {mounted && <Web3Connect />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
