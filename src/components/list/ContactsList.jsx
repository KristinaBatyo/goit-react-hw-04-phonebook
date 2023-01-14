import { ContactsList, ContactsItem, ContactsTitle, DeleteButton } from "./ContactsList.styled" 
import { PropTypes } from 'prop-types';

export const ContactsListRender = ({contacts, deleteContact}) => {

    return(
        <ContactsList>
        {contacts.map(({name, id, number}) => (
            <ContactsItem key={id}>
            <ContactsTitle>{name}</ContactsTitle>
            <ContactsTitle>{number}</ContactsTitle>
            <DeleteButton onClick={() => {
                deleteContact(id);
            }}>Delete</DeleteButton>
            </ContactsItem>

        ))}
        </ContactsList>
    )

};

ContactsListRender.prototype = {
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
        ),
        deleteContact: PropTypes.func,
    };