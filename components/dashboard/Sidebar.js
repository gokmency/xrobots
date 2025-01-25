export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 p-6 fixed">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500">Wallet Address</p>
          <p className="font-mono">0x1234...5678</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Shares</p>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">APY</p>
          <p className="text-2xl font-bold text-primary">12.5%</p>
        </div>
      </div>
    </div>
  )
}
