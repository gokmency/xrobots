import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import RobotCard from '../../components/marketplace/RobotCard';

// Mock data - Replace with actual API call
const mockRobots = [
  {
    id: 1,
    name: 'RoboServer X1',
    image: '/images/robot1.jpg',
    price: 1000,
    totalShares: 10,
    availableShares: 6,
    monthlyRevenue: 150,
    description: 'Advanced serving robot perfect for restaurants and hotels. Features AI-powered navigation and interaction.',
    category: 'service',
  },
  {
    id: 2,
    name: 'EventBot Pro',
    image: '/images/robot2.jpg',
    price: 1500,
    totalShares: 10,
    availableShares: 4,
    monthlyRevenue: 200,
    description: 'Professional event photography and interaction robot. Equipped with high-resolution cameras and social AI.',
    category: 'entertainment',
  },
  // Add more mock robots...
];

const Marketplace = () => {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredRobots, setFilteredRobots] = useState(mockRobots);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let result = [...mockRobots];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(robot => 
        robot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        robot.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(robot => robot.category === selectedCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'revenue':
        result.sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
        break;
      default:
        // 'newest' - keep original order
        break;
    }

    setFilteredRobots(result);
  }, [searchTerm, selectedCategory, sortBy]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Robot Marketplace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Discover and invest in revenue-generating robots
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search robots..."
                  className="w-full bg-dark-700 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-dark-700 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              >
                <option value="all">All Categories</option>
                <option value="service">Service Robots</option>
                <option value="entertainment">Entertainment</option>
                <option value="industrial">Industrial</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark-700 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="revenue">Highest Revenue</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { icon: <FiDollarSign />, label: 'Total Value', value: '$2.5M' },
            { icon: <FiTrendingUp />, label: 'Avg. Monthly Return', value: '12.5%' },
            { icon: <FiFilter />, label: 'Available Robots', value: filteredRobots.length },
          ].map((stat, index) => (
            <div key={stat.label} className="stat-card flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xl font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Robot Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRobots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </motion.div>

        {filteredRobots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No robots found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
