export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
      <div 
        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full animate-glow"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
