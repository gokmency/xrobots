export default function GlowingCard({ children, className = '' }) {
  return (
    <div className={`cyber-border p-6 rounded-xl card-hover ${className}`}>
      {children}
    </div>
  )
}
