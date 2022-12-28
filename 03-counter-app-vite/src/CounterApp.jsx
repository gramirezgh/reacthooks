
import { useState } from 'react'; 
import PropTypes from 'prop-types';

//CounterApp
export const CounterApp = ({ value }) => {

        const [ counter, setCounter ] = useState(10);

        const handleAdd = () => {
            /* setCounter( counter + 1 ); */
            setCounter( (c)=> c+1);
        }
    
        const lessCount = () => {
            setCounter( (c)=> c-1 );
        }

        const resetCount = () => {
            setCounter(value);
        }

    return(
        <>
             <h1>CounterApp</h1>
             { /* JSON.stringify(newMessage) */ } 
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ lessCount }> -1 </button>
            <button onClick={ resetCount } > Reset </button>
        </>
    );
}

// PropTypes
CounterApp.propTypes = {
    value: PropTypes.number,
}


// Default Props
CounterApp.defaultProps = {
    value: 'No existe valor',
}