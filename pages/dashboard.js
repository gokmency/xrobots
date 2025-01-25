import Sidebar from '../components/dashboard/Sidebar'
import RevenueChart from '../components/dashboard/RevenueChart'
import RobotGrid from '../components/dashboard/RobotGrid'

export default function Dashboard() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <RevenueChart />
          <button className="gradient-btn glow-effect px-6 py-3 rounded-lg text-white font-bold my-8">
            Claim Earnings
          </button>
          <RobotGrid />
        </main>
      </div>
    </div>
  )
}
