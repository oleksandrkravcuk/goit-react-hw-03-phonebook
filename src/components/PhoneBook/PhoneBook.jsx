import { Component } from "react";
import styles from './Phonebook.module.css';
import ContactForm from "./PhoneBookContact/ContactForm";
import Filter from "./PhoneBookContact/ContactFilter";
import ContactList from "./PhoneBookContact/ContactList";
import { nanoid } from 'nanoid';

class Phonebook extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: '',
        showDeleted: false,
    }

    change = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submit = (e) => {
        e.preventDefault();
        const { name, contacts } = this.state;
        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts`);
        return;
        }
        const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
        };

        this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
        }));
    }

    deleteContact = (id) => {
        this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    }

    filter = (value) => {
        this.setState({ filter: value });
    }

    render() {
        const { contacts, filter, showDeleted } = this.state;
        const filteredContacts = showDeleted
        ? contacts
        : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

        return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm
            name={this.state.name}
            number={this.state.number}
            onChange={this.change}
            onSubmit={this.submit}
            />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.filter} />
            <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
        </div>
        );
    }
    }

    export default Phonebook;