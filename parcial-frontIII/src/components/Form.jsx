import { useState } from 'react'

function Form (props) {
    const [name, setName]   = useState('')
    const [banda, setBanda] = useState ('')
    const [error, setError] = useState('')
     
    function handleSubmit(e) {
        e.preventDefault()
        if (!name || name.length<3 || /^\s/.test(name) ) {
          console.error('Por favor, ingresa tu nombre')
          setError('Por favor chequea que la información sea correcta')
          return
        }
        if (!banda || banda.length<6) {
          console.error('Por favor, ingresa tu banda de música favorita')
          setError('Por favor chequea que la información sea correcta')
 
        } else {
        props.onDatos(name, banda)     
        setError('')
        setName('')
        setBanda('')
      }
    }

  return (
    <div>
    <form className='formulario' onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name"></label>
      <input
          className='input'
          type="text"
          name="name"
          value={name}
          placeholder='Ingresá tu nombre'
          onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
        <label htmlFor="banda"></label>
        <input
          className='input'
          type="text"
          name="banda"
          value={banda}
          placeholder='Ingresá tu banda de música favorita'
          onChange={(e) => setBanda(e.target.value)}
        />
      </div>
      <button className='button' type='submit'>ENVIAR</button>
      
    </form>
   {error && <p className='error'>{error}</p>}
   </div>
      
)  

}
export default Form