import { ContactsListRender } from "../list/ContactsList"; 
import { ContactsForm } from "components/form/ContactsForm";
import { Filter } from "components/filter/Filter";
import { Component } from "react";
import { nanoid } from "nanoid";
import{AppContainer, Title} from './App.styled';
import { PropTypes } from 'prop-types';



export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  addContact = ({name, number}) => {
        const contact = {
      id: nanoid(),
      name,
      number,
    }
    console.log(name);
    const contactName = [];

    for (const contact of this.state.contacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    
  }
  
    changeFilter = (e) => {
    
    this.setState({filter: e.target.value});
    const inputFilter ={ filter: e.target.value};
    
    console.log(inputFilter);

  };
  
  delete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contactsLocal);
    if (parsetContacts) {
      this.setState({contacts: parsetContacts})
    }
    
  }

  componentDidUpdate(_, prevState) {
    const contacts = this.state;
    if (contacts !== prevState.contacts) {
      return localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    } 
  }

  render(){
   const {contacts} = this.state
   const {filter} = this.state
   const filterNormilized = this.state.filter.toLowerCase().trim();
   const visibleContacts = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormilized)
  );

    return(

      <AppContainer>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={this.addContact}/>
      <Title>Contacts</Title>
      <Filter value={filter} onChange={this.changeFilter}/>
      {contacts.length > 0 && (<ContactsListRender deleteContact={this.delete} contacts={visibleContacts} />)}
      </AppContainer>

    );
  }
}



App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  addContact: PropTypes.func,
  delete: PropTypes.func,
  changeFilter: PropTypes.func,
};