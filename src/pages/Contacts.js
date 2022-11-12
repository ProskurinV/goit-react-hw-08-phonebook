import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactEditor>
        <div>{isLoading && 'loader'}</div>
      </ContactEditor>
    </>
  );
}
