import { motion } from 'framer-motion';
import { FiHeart, FiDollarSign, FiClock } from 'react-icons/fi';

const NFTCard = ({ nft }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="nft-card overflow-hidden"
    >
      <div className="relative">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="badge bg-primary/20 backdrop-blur-sm">
            {nft.type}
          </span>
          <button className="like-button">
            <FiHeart className={`text-xl ${nft.liked ? 'text-red-500 fill-current' : 'text-white'}`} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold truncate">{nft.name}</h3>
          <div className="flex items-center gap-1 text-primary">
            <img src="/eth-icon.svg" alt="ETH" className="w-4 h-4" />
            <span className="font-semibold">{nft.price}</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {nft.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={nft.creator.avatar}
                alt={nft.creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400">Creator</p>
              <p className="text-sm font-medium truncate">{nft.creator.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Current Bid</p>
            <p className="text-sm font-medium">{nft.currentBid} ETH</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <FiClock />
            <span>{nft.timeLeft}</span>
          </div>
          <button className="btn-primary py-2 px-4 text-sm">
            Place Bid
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
