import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';
import ContactList from 'components/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

import { Filter } from 'components/Filter/Filter';

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
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <Filter />
        </>
      )}
      <>
        {isLoading && (
          <CircularProgress isIndeterminate color="green.300" size="30px" />
        )}
      </>
      <ContactList />
      {error}
    </>
  );
}
