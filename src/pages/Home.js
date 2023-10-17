import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Players from '../components/Players'

const Home = () => {

    const [letra, setLetra] = useState(1)
    const [again, setAgain] = useState(0)

    const [x1, setX1] = useState("")
    const [x2, setX2] = useState("")

    const [select, setSelect] = useState([])
    //console.log(select);

    useEffect(() => {

        const p1 = localStorage.getItem("jugador1")
        const p2 = localStorage.getItem("jugador2")

        if (p1 == null || p2 == null) {
            localStorage.setItem("jugador1", prompt("HOLA!, INGRESE NOMBRE DE JUGADOR 1"))
            localStorage.setItem("jugador2", prompt("HOLA!, INGRESE NOMBRE DE JUGADOR 2"))
        }

        setX1(localStorage.getItem("jugador1"))
        setX2(localStorage.getItem("jugador2"))

    }, [])


    const verificar = () => {
        const resultadosX = [["1x", "2x", "3x"], ["4x", "5x", "6x"],["7x", "8x", "9x"],["1x", "4x", "7x"],["2x", "5x", "8x"],["3x", "6x", "9x"],["1x", "5x", "9x"],["3x", "5x", "7x"]]
        const resultadosO = [["1o", "2o", "3o"], ["4o", "5o", "6o"],["7o", "8o", "9o"],["1o", "4o", "7o"],["2o", "5o", "8o"],["3o", "6o", "9o"],["1o", "5o", "9o"],["3o", "5o", "7o"]]

        resultadosX.map(result => {
            if (result.every(value => select.includes(value))) {
                setAgain(9)
                return alert(`gano ${x2}`)
            }
        })

        resultadosO.map(result => {
            if (result.every(value => select.includes(value))) {
                setAgain(9)
                return alert(`gano ${x1}`)
            }
        })
    }



    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "15rem" }}>
            <Players value={{ x1, x2 }} />
            <div style={{ textAlign: "center" }}>
                <h1> 3 EN RAYA !!!</h1>
                <p>turno de <strong>{letra === 1 ? x1 : x2}</strong></p>
                <div className='main'>
                    <div className='mainCont'>
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 1, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 2, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 3, setSelect, select, verificar }} />
                    </div>
                    <div className='mainCont'>
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 4, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 5, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 6, setSelect, select, verificar }} />
                    </div>
                    <div className='mainCont'>
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 7, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 8, setSelect, select, verificar }} />
                        <Input value={{ letra, setLetra, setAgain, again, inputId: 9, setSelect, select, verificar }} />
                    </div>
                </div>
                {again >= 9 ? (<button onClick={() => (setAgain(0), window.location.reload())}> AGAIN </button>) : null}

            </div>
        </div>
    )

}

export default Home
