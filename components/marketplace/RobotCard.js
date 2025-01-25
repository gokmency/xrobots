import { motion } from 'framer-motion';
import { FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';
import Image from 'next/image';

const RobotCard = ({ robot }) => {
  const {
    id,
    name,
    image,
    price,
    totalShares,
    availableShares,
    monthlyRevenue,
    description,
  } = robot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="robot-card"
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
          priority
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-sm font-semibold">
          {availableShares}/{totalShares} Shares
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-primary" />
            <div>
              <div className="text-sm text-gray-400">Price per Share</div>
              <div className="font-semibold">${price}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-accent" />
            <div>
              <div className="text-sm text-gray-400">Monthly Revenue</div>
              <div className="font-semibold">${monthlyRevenue}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            className="btn-primary flex-1"
            onClick={() => {/* Handle purchase */}}
          >
            Buy Shares
          </button>
          <button 
            className="btn-secondary p-3"
            onClick={() => {/* Handle details view */}}
          >
            <FiUsers />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotCard;
