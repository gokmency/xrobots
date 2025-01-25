export default function NFTCard() {
  return (
    <div className="cyber-border p-4 rounded-xl card-hover">
      <div className="relative">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Robot NFT" 
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-[#00f3ff]/20 px-3 py-1 rounded-full backdrop-blur-sm">
          <span className="text-[#00f3ff] font-semibold">0.5 ETH</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Robot #1234</h3>
          <span className="text-sm text-gray-400">Rarity: 92%</span>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-[#00f3ff] to-[#8a2be2]" />
        <button className="w-full glowing-btn">
          Buy Now
        </button>
      </div>
    </div>
  )
}
