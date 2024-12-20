function Input({ label, helperText, error, className = '', ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
        {...props}
      />
      {helperText && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Input;