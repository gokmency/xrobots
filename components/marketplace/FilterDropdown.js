export default function FilterDropdown({ options, value, onChange, label }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 appearance-none"
      >
        <option value="all">All {label}</option>
        {options.filter(opt => opt !== 'all').map(option => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
