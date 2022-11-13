import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
