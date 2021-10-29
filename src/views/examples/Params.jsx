import React from 'react'
import { useParams } from 'react-router'

const Params = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Param</h1>
      <p>Value: {id}</p>
    </div>
  )
}

export default Params
