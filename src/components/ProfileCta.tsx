import React from 'react'
import { ProfileProps } from './../types/ProfileProps'
import { v4 as uuidv4 } from 'uuid'

const ProfileCta = (props: ProfileProps) => {
  const { selected, setSelected } = props

  const isActive = 'text-white'
  const notActive = 'text-caption'

  const data = [
    {
      idx: 1,
      state: 'daily',
      text: 'Daily'
    },
    {
      idx: 2,
      state: 'weekly',
      text: 'Weekly'
    },
    {
      idx: 3,
      state: 'monthly',
      text: 'Monthly'
    }
  ]

  return (
    <div className="px-6 py-5">
      <ul className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-4">
        {data.map((item) => {
          return (
            <li key={uuidv4()}>
              <button
                onClick={() => {
                  setSelected(item.state)
                }}
                className={selected === item.state ? isActive : notActive}
              >
                {item.text}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProfileCta
