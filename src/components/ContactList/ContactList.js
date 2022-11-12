import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ContactSection,
  ContactTitle,
  ContactWrapper,
} from './ContactList.styled';
import Item from 'components/ContactItem/ContactItem';

export default function ContactList({ title }) {
  const contacts = useSelector(selectAllContacts);

  return (
    <ContactSection>
      <>
        <ContactTitle>{title}</ContactTitle>

        <ContactWrapper>
          {contacts.map(({ id, name, phone }) => (
            <Item key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactWrapper>
      </>
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
