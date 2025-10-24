import { colors } from '@/asset/color'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import Button from './Button'
import { truncateText } from '@/lib/common'
import { data_reviews } from '@/config/home'
import { cn } from '@/lib/utils'
import Section from './Section'

const SectionReview = () => {
  return (
      <Section className="fc md:grid md:grid-cols-2 md:px-0!">
          <div className="fc gap-2">
            <h3 className="flex items-center gap-2 justify-center">
              People{" "}
              <span>
                <Heart color={colors.POMEGRAMATE} />
              </span>
              Evoluter
            </h3>
            <p className="text-sm sm:text-md">
              We are proud of the hard work we deliver, and our clients love it
              too. Here is a few Evoluter.com reviews we have received.
            </p>
          </div>
          <div className="md:flex items-center gap-2 hidden w-full md:justify-end">
            <Button
              style={{ backgroundColor: colors.WHITE }}
              className="w-10 h-10 flex justify-center items-center"
            >
              <ChevronLeft className="w-6 text-black h-6" />
            </Button>
            <Button
              style={{ backgroundColor: colors.WHITE }}
              className="w-10 h-10 flex justify-center items-center"
            >
              <ChevronRight className="w-6 text-black h-6" />
            </Button>
          </div>
          {data_reviews.map((item, i) => (
            <div
              className={cn(i % 2 === 0 ? "mt-10" : "", "fc relative")}
              key={item.author}
            >
              <div
                className={cn(
                  "md:absolute w-0 md:w-10 h-10 bg-gray-200 rounded-md",
                  i % 2 === 0 ? "-left-8 -top-8" : "bottom-8 -right-8"
                )}
              ></div>
              <div
                className="card"
                style={{ backgroundColor: colors.MINE_SHAFT }}
              >
                <p className="text-sm sm:text-md">“{item.review}”</p>
                <div className="fc md:flex-row flex-nowrap md:items-center md:gap-4 mt-4">
                  <strong className="font-semibold whitespace-nowrap">
                    {item.author}
                  </strong>
                  <p className="whitespace-nowrap text-xs">
                    {item.position}{" "}
                    <span
                      style={{
                        color: colors.MACARONI_AND_CHEESE,
                        fontWeight: 600,
                      }}
                    >
                      {truncateText(item.companyName, 16)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center gap-2 md:hidden w-full">
            <Button
              style={{ backgroundColor: colors.WHITE }}
              className="w-10 h-10 flex justify-center items-center"
            >
              <ChevronLeft className="w-6 text-black h-6" />
            </Button>
            <Button
              style={{ backgroundColor: colors.WHITE }}
              className="w-10 h-10 flex justify-center items-center"
            >
              <ChevronRight className="w-6 text-black h-6" />
            </Button>
          </div>
        </Section>
  )
}

export default SectionReview