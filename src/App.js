import React, {useState} from 'react';
import styled from '@emotion/styled'

import Frase from './components/Frase'

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {
  const [frase, setFrase] = useState({})

  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const de = await api.json()
    setFrase(de[0])
    
  }
  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
      <Boton
        onClick={consultarApi}
      >Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
