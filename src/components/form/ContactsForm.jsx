import { ContactsContainer, ContactsLabel, ContactsButton, ContactsInput} from './ContactsForm.styled.jsx';
import PropTypes from "prop-types";
import { useState } from 'react';

export const  ContactsForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')

    const handleChahgeName = e => {
        setName(e.currentTarget.value)

    };
    const handleChahgeNumber = e => {
        setNumber(e.currentTarget.value)

    };
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        console.log({name})
        reset();
    }
    
    const reset = () => {
        setName('');
        setNumber('')
        };
        

        return (
            <ContactsContainer onSubmit={handleSubmit}>
            <ContactsLabel>
                Name
            <ContactsInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChahgeName}
            value={name}
            />
            </ContactsLabel>
            <ContactsLabel>
                Number
            <ContactsInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChahgeNumber}
            value={number}
            />
            </ContactsLabel>
        <ContactsButton type="submit" >Add Contact</ContactsButton>
        </ContactsContainer>
        );
    }




ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
