import { MainBox } from './App.styled';
import FormEl from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title/Title';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainBox>
      <Title title="Phonebook" />
      <FormEl />
      <Filter title="Find contacts by name" />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList title="Contacts" />
    </MainBox>
  );
}
