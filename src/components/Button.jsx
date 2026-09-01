import React from 'react';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-600 border-primary',
  outline: 'border-zinc-500 text-current hover:border-primary hover:text-primary',
};

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const styles = `inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold transition-colors ${
    variants[variant] || variants.primary
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
