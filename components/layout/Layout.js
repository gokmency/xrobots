import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orb - Top Right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[120px] opacity-50" />
        
        {/* Gradient Orb - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full filter blur-[120px] opacity-50" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>
    </div>
  );
};

export default Layout;
