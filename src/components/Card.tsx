import React from 'react'
import { CardProps } from './../types/CardProps'

const Card = (props: CardProps) => {
  const { bg, style, selected, timeframes, title } = props

  const data: { current: string | number; previous: string | number } = { current: 0, previous: 0 }

  const getTimeFrames = (selected: string) => {
    switch (selected) {
      case 'daily':
        data.current = timeframes.daily.current
        data.previous = timeframes.daily.previous
        break
      case 'weekly':
        data.current = timeframes.weekly.current
        data.previous = timeframes.weekly.previous
        break
      case 'monthly':
        data.current = timeframes.monthly.current
        data.previous = timeframes.monthly.previous
        break
      default:
        data.current = 'NA'
        data.previous = 'NA'
        break
    }
  }

  getTimeFrames(selected)

  return (
    <div
      className={`bg-${style} rounded-xl shadow-md overflow-hidden bg-${bg} bg-no-repeat bg-right-top pt-12`}
    >
      <div className="bg-card rounded-t-xl px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-medium">{title}</h2>
          <button>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:gap-3 lg:items-start">
          <h2 className="text-xl font-light lg:text-6xl">{data.current}hrs</h2>
          <p className="text-sm lg:text-lg text-caption">Last week - {data.previous}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default Card
