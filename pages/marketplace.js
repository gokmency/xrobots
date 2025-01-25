import { useState } from 'react'
import NFTCard from '../components/marketplace/NFTCard'
import FilterDropdown from '../components/marketplace/FilterDropdown'

export default function Marketplace() {
  const [filters, setFilters] = useState({ price: 'all', type: 'all' })
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Marketplace</h1>
          <div className="flex space-x-4">
            <FilterDropdown
              options={['all', 'low-high', 'high-low']}
              value={filters.price}
              onChange={(value) => setFilters({ ...filters, price: value })}
              label="Price"
            />
            <FilterDropdown
              options={['all', 'industrial', 'service', 'utility']}
              value={filters.type}
              onChange={(value) => setFilters({ ...filters, type: value })}
              label="Robot Type"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <NFTCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
