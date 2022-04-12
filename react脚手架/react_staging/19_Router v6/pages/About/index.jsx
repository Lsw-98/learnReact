import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

export default function About() {
  // 1
  // let [params] = useSearchParams()
  // params.append('myname', 'lsw')
  // let id = params.get('id')
  // let myname = params.get('myname')

  // 2
  let params = useParams()
  let id = params.id
  return (
    <div>
      {
        id
      }
    </div>
  )
}
