import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = '',
  title,
  subtitle,
  action
}) => {
  return (
    <section id={id} className={`w-full py-20 px-6 md:px-12 max-w-[1600px] mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-ui-border">
          <div>
            {title && <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-2">{title}</h2>}
            {subtitle && <p className="text-neutral-400 font-sans text-sm md:text-base tracking-wide">{subtitle}</p>}
          </div>
          {action && <div className="mt-4 md:mt-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
};