import PropTypes from 'prop-types';

const persona = {
    name: 'Fernando', 
    age: 25,
    profession: 'Programador'
}

const saludo = () => {
    return '¡Bienvenido al curso React!';
}

export const FirstApp = ({ title, subTitle } ) => {
    return ( 
        <>
            <h1>{ saludo() }</h1>
            <h2>Soy un subtítulo</h2>
            <code>{ JSON.stringify( persona ) }</code>

            <h3>{ title }</h3>
            <h4>{ subTitle }</h4>
        </>
    );
}

/* Definiendo las Proptypes */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}