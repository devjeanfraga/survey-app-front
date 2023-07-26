import { useState } from 'react'

export default (initalValue: boolean = false) => {
  const [value, setValue] = useState(initalValue)
  const handleToggle = () => setValue(!initalValue)
  return [value, handleToggle] as const
}
