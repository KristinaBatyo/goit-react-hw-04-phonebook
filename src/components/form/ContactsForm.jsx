import { Component } from 'react';
import { ContactsContainer, ContactsLabel, ContactsButton, ContactsInput} from './ContactsForm.styled.jsx';
import PropTypes from "prop-types";


export class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    }
    handleChahge = e => {
        const {name, value} = e.currentTarget;

        this.setState({[name]: value,});
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);

        this.reset();

    }
    
    reset = () => {
        this.setState({name: '', number: ''});
        };
        
    render() {

        return (
            <ContactsContainer onSubmit={this.handleSubmit}>
            <ContactsLabel>
                Name
            <ContactsInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChahge}
            value={this.state.name}
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
            onChange={this.handleChahge}
            value={this.state.number}
            />
            </ContactsLabel>
        <ContactsButton type="submit" >Add Contact</ContactsButton>
        </ContactsContainer>


        );

    }
}




ContactsForm.propType = {
    name: PropTypes.string,
    number: PropTypes.string,
    handelSubmit: PropTypes.func,
    handleChahge: PropTypes.func,
  };












// export const Contacts = ({ contacts, onDeleteContact, setFilter }) => (
//     <ContactsContainer>
//     <ContactsTitle>Contacts</ContactsTitle>
//     <ContactsInput type="text" onChange={setFilter} />
//     <>
//     {contacts.map(({ id, name, number }) => (
//         <ContactsItem key={id}>
//         {name}: {number}
//         <ContactsButton type="button" onClick={() => onDeleteContact(id)}>
//             Delete
//         </ContactsButton>
//         </ContactsItem>
//     ))}
//     </>
//     </ContactsContainer>
// );

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     onDeleteContact: PropTypes.func.isRequired,
//     setFilter: PropTypes.func.isRequired,
// };

