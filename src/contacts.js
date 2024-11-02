import axios from 'axios';

const API_URL = 'https://671379596c5f5ced6626844c.mockapi.io/contacts';

export const getContacts = () => axios.get(API_URL);
export const addContact = (contact) => axios.post(API_URL, contact);
export const updateContact = (id, updatedContact) => axios.put(`${API_URL}/${id}`, updatedContact);
export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
