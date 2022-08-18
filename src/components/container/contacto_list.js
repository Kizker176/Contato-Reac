import React from 'react';
import protoTypes from 'prop-types';
import { contact } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactoList = ({contact}) => {
    return (
        <div>
            <div>
                <h2>Nombre: {contact.name}</h2>
                <h3>Apellido: {contact.Apellido}</h3>
                <h4>Email: {contact.Email}</h4>
            </div>
            <ContactoComponent contact={true}></ContactoComponent>
        </div>
    );
};

ContactoList.protoTypes = {
    contact: protoTypes.arrayOf(contact),
};


export default ContactoList;
