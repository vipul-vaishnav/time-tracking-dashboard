import React, { useState } from 'react'
import Card from './components/Card'
import Profile from './components/Profile'
import Data from './data/Data'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [selected, setSelected] = useState<string>('weekly')

  return (
    <div className="bg-body font-normal font-default text-lg text-white min-h-screen">
      <main className="container max-w-7xl mx-auto py-20 px-5 lg:flex justify-between gap-8">
        <Profile selected={selected} setSelected={setSelected} />
        <div className="lg:grid grid-cols-3 flex-1 gap-8">
          {Data.map((el) => {
            return (
              <Card
                key={uuidv4()}
                title={el.title}
                bg={el.bg}
                style={el.style}
                idx={el.idx}
                timeframes={el.timeframes}
                selected={selected}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
