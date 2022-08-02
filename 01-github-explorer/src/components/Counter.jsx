//Sempre que uma função do react iniciar com 'use', chamamos-a de hook(gancho)
import { useState } from 'react'

//Imutabilidade : Criar um novo espaço na memória contendo a nova informação, do que alterar a informação que já está salva na memória

export function Counter(){
  const [counter, setCounter] = useState(0)


  function increment() {
    setCounter(counter + 1)
  }

  function descrement(){
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={descrement}>Descrement</button>
    </div>
  )
}
