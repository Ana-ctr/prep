import React from 'react';

const ContactItem = ({ contact, onEdit, onDelete }) => (
  <div>
    <h3>{contact.firstName} {contact.lastName}</h3>
    <p>Phone: {contact.phone}</p>
    <p>Email: {contact.email}</p>
    <button onClick={() => onEdit(contact)}>Edit</button>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </div>
);

export default ContactItem;
