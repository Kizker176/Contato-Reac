
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const ContactoComponent = ({ contacto }) => {
    const [conectado, setConectado] = useState(contacto);
    return (
        <div>
            <h5>{conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h5>
            <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>

        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.bool,
};


export default ContactoComponent;
