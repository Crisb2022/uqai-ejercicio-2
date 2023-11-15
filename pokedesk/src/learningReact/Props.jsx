/*
    Uso de PROPS
*/

// El nombre de la funcion padre debe ser la misma que el nombre de la clase
export default function Props(props) {
    const { menssage, name } = props // Paso de los atributos que se estan mandando desde App.js <Props menssage="El Creador" name="Cris"/>
    return (
        <>
            <h1>Hola desde te saluda: {menssage}!!!</h1>
            <h2>Y yo soy: {name}</h2>
        </>

    );
}