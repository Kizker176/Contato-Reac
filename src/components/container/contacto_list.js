import React from 'react';
import { contact } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactoList = () => {
    const defaultcontact = new contact('Kizker', 'Alvarez', 'kizkereac@reac.com', false);
    return (
        <div>
            <div>
                <h1>
                    Tu contacto:
                </h1>
            </div>
            <ContactoComponent contact={defaultcontact}></ContactoComponent>
        </div>
    );
};



export default ContactoList;
