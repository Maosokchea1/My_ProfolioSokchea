import React from 'react';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-600 border-primary shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30',
  outline: 'border-zinc-300 dark:border-zinc-700 text-current hover:border-primary hover:text-primary bg-transparent',
};

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const styles = `inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
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
