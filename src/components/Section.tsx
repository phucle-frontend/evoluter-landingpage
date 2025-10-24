import { cn } from '@/lib/utils'
import React from 'react'

const Section = ({children,className}: {children: React.ReactNode,className?: string}) => {
  return (
    <section className={cn(
        'gap-4 fc card sm:p-10',
        className
    )}>
        {children}
    </section>
  )
}

export default Section