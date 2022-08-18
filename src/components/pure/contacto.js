
import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../models/contacto.class';


const ContactoComponent = ({ contact }) => {
    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.Apellido}</h3>
            <h4>Email: {contact.Email}</h4>
            <h5>Contacto: {contact.Conectado ? 'En Línea' : 'No Disponible'}</h5>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(contact)
};


export default ContactoComponent;
