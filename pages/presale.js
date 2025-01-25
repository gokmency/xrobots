import PresaleTier from '../components/PresaleTier'
import ProgressBar from '../components/ProgressBar'

export default function Presale() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Token Presale</h1>
        
        <ProgressBar progress={65} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <PresaleTier
            tier="Tier 1"
            bonus={30}
            price={0.1}
          />
          <PresaleTier
            tier="Tier 2"
            bonus={20}
            price={0.15}
          />
          <PresaleTier
            tier="Tier 3"
            bonus={10}
            price={0.2}
          />
        </div>
      </div>
    </div>
  )
}
