import PropTypes from 'prop-types';


//FirstApp
export const FirstApp = ({ title, subtitle, name }) => {

    return(
        <>
             <h1>{ title }</h1>
             { /* JSON.stringify(newMessage) */ } 
            <p>{ subtitle }</p>

            <p>{ name }</p>
        </>
    );
}

// Prop-types
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}


// Default Props
FirstApp.defaultProps = {
    title: 'Sin titulo',
    subtitle: 'No existe subtitulo',
    name: 'Juan Valdez',
}
