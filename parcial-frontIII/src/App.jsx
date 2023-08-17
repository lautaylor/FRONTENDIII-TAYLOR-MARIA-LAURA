import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import './App.css'

function App() {
  const [elName, setElName] = useState('')
  const [laBanda, setLaBanda] = useState ('')
  
  function handleSubmit(name,banda) {
  setElName(name)
  setLaBanda(banda)
 }

  return (
    <div >
      <h1>Elige tu Banda Favorita</h1>
      <Form onDatos={handleSubmit}/> 
            
      {(elName && laBanda) ? (
        <div>
          <Card name={elName} banda={laBanda} />
        </div>
      ): undefined}
    </div>
  )

}


export default App;