//** React Imports
import { useEffect, useState } from 'react'

export default function useUser() {
  // ** States
  const [user, setUser] = useState()

  // ** Set User
  useEffect(() => {
    setUser('Enzo')
  }, [])

  return user
}
