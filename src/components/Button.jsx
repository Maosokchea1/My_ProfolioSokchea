import React from 'react';

const Button = ({ href, children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600',
    secondary: 'border border-zinc-300 text-gray-900 hover:bg-gray-100',
  };

  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
    variants[variant] || variants.primary
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
