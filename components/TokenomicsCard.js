export default function TokenomicsCard({ title, description }) {
  return (
    <div className="card hover-card">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
