import { Component } from 'react';
import { MainBox } from './App.styled';
import { nanoid } from 'nanoid';
import FormEl from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import Notiflix from 'notiflix';

import Title from 'components/Title/Title';

export default class App extends Component {
  contactId = nanoid();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handlerFormSubmit = ({ name, number }) => {
    const nameToRegistr = name.toLowerCase();
    if (this.findDuplicateName(nameToRegistr)) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      return;
    }
    this.addContact(nameToRegistr, number);
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase)
    );
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findDuplicateName = name => {
    const { contacts } = this.state;
    return contacts.find(item => item.name.toLowerCase() === name);
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <MainBox>
        <Title title="Phonebook" />
        <FormEl onSubmit={this.handlerFormSubmit} />
        <Filter
          title="Find contacts by name"
          // filter={filter}
          value={filter}
          onChange={this.onFilterChange}
        />
        {contacts.length > 0 && (
          <ContactList
            title="Contacts"
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </MainBox>
    );
  }
}
