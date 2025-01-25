export default function PresaleTier({ tier, bonus, price }) {
  return (
    <div className="card hover-card">
      <h3 className="text-2xl font-bold mb-4">{tier}</h3>
      <div className="space-y-4">
        <p className="text-xl text-primary">+{bonus}% Bonus</p>
        <p className="text-lg">{price} ETH per token</p>
        <button className="w-full gradient-btn py-3 rounded-lg text-white font-bold">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
