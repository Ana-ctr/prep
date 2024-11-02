import React, { useState, useEffect } from 'react';
import { getContacts } from '../contacts';
import ContactItem from './ContactItem';

const ContactList = ({ onEdit, onDelete, searchQuery }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await getContacts();
    setContacts(response.data);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='col-4 ms-5'>
    
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onEdit={onEdit} onDelete={onDelete} />
      ))}
    
     </div>
  );
};

export default ContactList;
