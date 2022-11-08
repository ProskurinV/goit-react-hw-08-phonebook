import { MainBox } from './App.styled';
import FormEl from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title/Title';

export default function App() {
  return (
    <MainBox>
      <Title title="Phonebook" />
      <FormEl />
      <Filter title="Find contacts by name" />
      <ContactList title="Contacts" />
    </MainBox>
  );
}
