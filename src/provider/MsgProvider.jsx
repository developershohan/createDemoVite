
import { useState } from 'react'
import msgContext from '../context/MsgContext'

const MsgProvider = ({children}) => {
    const [msg, setMsg] = useState("")
  return (
    <msgContext.Provider value={{msg, setMsg}}>{children}</msgContext.Provider>
  )
}

export default MsgProvider