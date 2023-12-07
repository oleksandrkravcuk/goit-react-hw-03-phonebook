import React from "react";

const ContactForm = ({ name, number, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
        <label>
            Name
            <input type="text" name="name" value={name} onChange={onChange} required />
        </label>
        <label>
            Number
            <input type="tel" name="number" value={number} onChange={onChange} required />
        </label>
        <button type="submit">
            Add Contact
        </button>
        </form>
    );
}

export default ContactForm;