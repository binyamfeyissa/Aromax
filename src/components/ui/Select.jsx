function Select({ label, options, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
      )}
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
        {...props}
      >
        <option value="">Select one option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}

export default Select;