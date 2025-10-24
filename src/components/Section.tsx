import { cn } from '@/lib/utils'
import React from 'react'

const Section = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      className={cn('gap-4 fc card sm:p-10', className)}
      style={style}
    >
      {children}
    </section>
  );
};


export default Section