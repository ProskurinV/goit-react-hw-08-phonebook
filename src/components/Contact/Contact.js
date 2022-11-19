import css from './Contact.module.css';
// import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { DeleteIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
export const Contact = ({ id, name, number }) => {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button
        type="button"
        className={css.button}
        onClick={handleDelete}
        // disabled={isLoading}
      >
        <DeleteIcon w={5} h={5} />
      </button>
    </div>
  );
};
