function Button({ children, variant = 'primary', type = 'button', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors duration-200 w-full';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-white text-primary border border-primary hover:bg-gray-50',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;