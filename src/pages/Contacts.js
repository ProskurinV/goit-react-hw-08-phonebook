import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactEditor } from '../components/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

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
