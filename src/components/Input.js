import React from 'react'

const Input = ({ value }) => {
    //console.log(value.inputId);


    const cambioLetra = () => {
        if (value.letra === 1) {
            value.setLetra(2);
        } else if (value.letra === 2) {
            value.setLetra(1)
        }
    };

    const handleInputChange = (e) => {
        if (e.target.value !== "") {
            alert("este campo ya esta elegido")
           
        } else {
            const id = e.target.id

            if (value.letra === 1) {
                e.target.value = "o";
                value.select.push(`${id}o`)
                value.setAgain(++value.again)
                value.verificar()

            } else if (value.letra === 2) {
                e.target.value = "x";
                value.select.push(`${id}x`)
                value.setAgain(++value.again)
                value.verificar()
                
            }
            cambioLetra();

        }
    };

    return (
        <div>
            <input type='text' id={value.inputId} onClick={(e) => handleInputChange(e)}
                readOnly />
        </div>
    )
}

export default Input
