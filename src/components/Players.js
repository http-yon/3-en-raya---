import React from 'react'

const Players = ({ value }) => {

  const changePlayer = () => {

    localStorage.removeItem("jugador1")
    localStorage.removeItem("jugador2")

    window.location.reload()

  }

  return (
    <div className='Players'>
      <h2> JUGADOR 1</h2>
      <p> {value.x1}</p>

      <br></br>

      <h2> JUGADOR 2</h2>
      <p> {value.x2} </p>

      <br></br>
      <br></br>

      <button onClick={() => changePlayer()}> Cambiar Jugadores </button>

      <br></br>
      <br></br>

      <button onClick={()=> window.location.reload()}> RESET </button>


    </div>
  )
}

export default Players
