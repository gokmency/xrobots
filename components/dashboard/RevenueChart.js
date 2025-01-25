import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function RevenueChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: '#6366f1',
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Revenue Overview</h2>
      <Line data={data} />
    </div>
  )
}
