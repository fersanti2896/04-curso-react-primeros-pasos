
const persona = {
    name: 'Fernando', 
    age: 25,
    profession: 'Programador'
}

const saludo = () => {
    return '¡Bienvenido al curso React!';
}

export const FirstApp = () => {
    return ( 
        <>
            <h1>{ saludo() }</h1>
            <p>Soy un subtítulo</p>
            <code>{ JSON.stringify( persona ) }</code>
        </>
    );
}
