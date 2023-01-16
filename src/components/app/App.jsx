import { ContactsListRender } from "../list/ContactsList"; 
import { ContactsForm } from "components/form/ContactsForm";
import { Filter } from "components/filter/Filter";
import { nanoid } from "nanoid";
import{AppContainer, Title} from './App.styled';
import { useState, useEffect } from "react";

export const App = () =>  {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  

  const addContact = ({name, number}) => {
        const contact = {
      id: nanoid(),
      name,
      number,
    }
    const contactName = [];

    for (const contact of contacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts list`);
      return;
    }

    setContacts([...contacts, contact],
    );
    
  }
  
    const changeFilter = (e) => {
    setFilter(e.target.value);
    const inputFilter ={ filter: e.target.value};
    console.log(inputFilter);

  };
  
  const deleted = (contactId) => {
    setContacts(prevState => [
      ...prevState.filter(contact => contactId !== contact.id),
    ]);
  };


   const filterNormilized = filter.toLowerCase().trim();
   const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormilized)
  );

    return(

      <AppContainer>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={addContact}/>
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter}/>
      {contacts.length > 0 && (<ContactsListRender deleteContact={deleted} contacts={visibleContacts} />)}
      </AppContainer>

    );
  }