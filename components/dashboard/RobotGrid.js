export default function RobotGrid() {
  const robots = Array(6).fill({
    image: 'https://via.placeholder.com/200',
    status: Math.random() > 0.5 ? 'Active' : 'Rented',
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {robots.map((robot, i) => (
        <div key={i} className="card hover-card">
          <img src={robot.image} alt={`Robot ${i + 1}`} className="w-full rounded-lg" />
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              robot.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {robot.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
