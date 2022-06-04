import React, { useRef, useEffect } from 'react'

export default function Demo() {

  const InputRef = useRef("默认值")
  useEffect(() => {
    InputRef.current.fo
  }, [])


  return (
    <div>
      <input type="text" ref={InputRef} />
    </div>
  )
}