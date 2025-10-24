import React from 'react'
import Section from './Section'
import { data_card_why } from '@/config/home'
import CardWhy from './CardWhy'

const SectionWhy1 = () => {
  return (
    <Section className="flex p-0! flex-col sm:grid sm:grid-cols-12">
          <strong className="max-sm:text-xl sm:text-2xl col-span-12 font-bold text-white text-center">
            Why are companies and founders using Evoluter?
          </strong>
          {data_card_why.map((item, i) => (
            <CardWhy
              key={i}
              color={item.color}
              title={item.title}
              metric={item.metric}
              description={item.description}
            />
          ))}
        </Section>
  )
}

export default SectionWhy1