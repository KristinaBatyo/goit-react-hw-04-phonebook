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

ContactsListRender.propTypes = {
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
        ),
        deleteContact: PropTypes.func.isRequired,
    };