import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';
// import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { Filter } from 'components/Filter/Filter';
// import { Loader } from '../components/Spinner/Spinner';

import { CircularProgress } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <h1>Phonebook</h1> */}
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <h2>Your Contacts</h2>
          <Filter />
        </>
      )}
      <div>
        {isLoading && (
          <CircularProgress isIndeterminate color="green.300" size="30px" />
        )}
      </div>
      <ContactList />
      {error}
    </>
  );
}
