import React, { useState, useEffect } from 'react';
import { getContacts, addContact, updateContact, deleteContact } from './/contacts';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };


  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddOrUpdateContact = async (contactData) => {
    if (selectedContact) {
      await updateContact(selectedContact.id, contactData);
      setSelectedContact(null);  
    } else {
      await addContact(contactData);
    }
    fetchContacts();  
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    fetchContacts(); 
  };

  return (
    <div className='col-8 p-5'>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name"
      />
      <ContactList
        contacts={contacts}
        onEdit={setSelectedContact}
        onDelete={handleDeleteContact}
        searchQuery={searchQuery}
      />
      <ContactForm onSave={handleAddOrUpdateContact} contact={selectedContact} />
    </div>
  );
};

export default App;
