import React, { useState } from 'react';

function AdivinaComponent() {
    const [numero, setNumero] = useState(1);
    const [sorteo, setSorteo] = useState(0);
    const [result, setResult] = useState(false);
    const [juegos, setJuegos] = useState(0);
    const [ganados, setGanados] = useState(0);
    const [perdidos, setPerdidos] = useState(0);

    const sortear = () => {
        if (numero < 1 || numero > 10) {
            alert("Por favor, ingrese un número entre 1 y 10.");
            return;
        }
        
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); //asigno valor por función
        setResult(true) //asigno valor por función
        setJuegos(prev => prev +1);

        if(parseInt(numero) === winner){
            setGanados(prev => prev +1);
        }else{
            setPerdidos(prev => prev +1);
        }
    }

    return (
        <div style={{ margin: 30 }}>
            {!result ?
                <div>
                    <h4>Adivina el Número del 1 al 10</h4>
                    <input type='number' value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                    <br />
                    <button onClick={() => sortear()}>SORTEAR</button>
                </div>
                :
                <>
                    <hr />
                    <h3>Usted eligió el {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3 style ={{color: sorteo === parseInt(numero) ? 'green' : 'red'}}>{sorteo == numero ? "Ha Ganado!" : "Siga participando"}</h3>
                    <br />
                    <button onClick={() => {
                        setResult(false)
                        setNumero(1)
                    }}>Volver a jugar</button>

                    <h4>Estadisticas:</h4> <br />
                    <p>Juegos jugados: {juegos}</p>
                    <p>Juegos ganados: {ganados}</p>
                    <p>Juegos perdidos: {perdidos}</p>

                </>
            }
        </div>
    );
}

export default AdivinaComponent;