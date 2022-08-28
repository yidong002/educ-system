import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'antd'

const UseDomeTest = (props) => {
  console.log('props',props)
  const [state, setState] = useState(0)
  const [count, setCount] = useState([])

  useEffect(() => {
    console.log('000000', count)
  }, [count])
  const dbValue = useMemo(() => {
    return state*2
  }, [state])

  const addlist = (value) => {
    setCount(count => [...count, {value: value}])
  }

  const stateButton = () => {
    setState(state + 1)
  }  
  return (
    <>
      {state}--{dbValue}
      {count.map(item => {
        return (
          <>
            <span>{item.value}----</span>
          </>
        )
      })}
      <Button type='primary' onClick={stateButton}>按钮</Button>
      <Button type='primary' onClick={() => addlist(2)}>add</Button>
    </>
  )


}



export default UseDomeTest