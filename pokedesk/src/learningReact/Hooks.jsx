import { useState } from "react";

export default function Hooks(props){
    const {person} = props;

    const [counter, setCounter] =  useState(0);
    const [name, setName] = useState("Cris")

    return (
        <>
        <h1>Contador de numeros con useState: {counter}</h1>
        <button onClick={() => setCounter(counter+1)}>Aplastalo perro</button>  
        <h2>Nombre del personaje {name}</h2>
        <button onClick={() => setName(person)}>Cambia el nombre</button>      
        </>
    );
}