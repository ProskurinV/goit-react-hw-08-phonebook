import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
// фільтр тут повинен бути
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // const normFilter = filter.value.toLowerCase();

  const filteredContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name?.toLowerCase()?.includes(normFilter)
    );
  };
  const visibleContacts = filteredContacts();

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   title: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
