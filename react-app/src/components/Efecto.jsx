import { useState, useEffect } from 'react'
export const Efecto = () => {
  const [contador, setContador] = useState(0)
   
  useEffect(() => {   
  console.log('El componente se renderizo')
  
}, [contador])

 console.log('El componente se renderizo')
  return (
    <div>
        <h2>useEffect: ejemplo</h2>
        <p>contador: {contador}</p>
        <button onClick={() =>setContador(contado +1)}>
                cambiar estado
            </button>
    </div>
  )
}
