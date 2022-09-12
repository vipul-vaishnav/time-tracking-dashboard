import { Dispatch, SetStateAction } from 'react'

export type ProfileProps = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}
