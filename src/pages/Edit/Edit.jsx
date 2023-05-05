import React, {useContext} from 'react'
import { UserContext } from '../../UserContext'

const Edit = () => {

const msg = useContext(UserContext)





  return (
    <div>{msg}</div>
  )
}

export default Edit