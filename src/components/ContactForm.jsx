
import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, onCancel, contact }) => {
  const [firstName, setFirstName] = useState(contact ? contact.firstName : '');
  const [lastName, setLastName] = useState(contact ? contact.lastName : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [email, setEmail] = useState(contact ? contact.email : '');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSave = () => {
    if (!firstName || !lastName) {
      alert("Имя и фамилия обязательны!");
      return;
    }
    onSave({ firstName, lastName, phone, email });
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className="contact-form">
      <h1>Contact Manager</h1>
      <h3>{contact ? "Edit Contact" : "Add New Contact"}</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="form-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ContactForm;
