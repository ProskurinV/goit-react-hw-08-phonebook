import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ContactSection,
  ContactTitle,
  ContactWrapper,
} from './ContactList.styled';
import Item from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactList({ title }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normFilter = filter.value.toLowerCase();

  const filteredContacts = contacts.items.filter(({ name }) =>
    name?.toLowerCase()?.includes(normFilter)
  );

  return (
    <ContactSection>
      {contacts.items.length > 0 && (
        <>
          <ContactTitle>{title}</ContactTitle>

          <ContactWrapper>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id} id={id} name={name} number={number} />
            ))}
          </ContactWrapper>
        </>
      )}
    </ContactSection>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
