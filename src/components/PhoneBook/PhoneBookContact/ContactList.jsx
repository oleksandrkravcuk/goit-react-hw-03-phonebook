import React from "react";
import styles from '../Phonebook.module.css';
const ContactList = ({ contacts, deleteContact }) => (
    <ul>
        {contacts.map(contact => (
        <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => deleteContact(contact.id)} className={styles.deleteButton}>Delete</button>
        </li>
        ))}
    </ul>
);

export default ContactList;