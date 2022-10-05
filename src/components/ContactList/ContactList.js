import PropTypes from 'prop-types';

import {
  ContactSection,
  ContactTitle,
  ContactWrapper,
} from './ContactList.styled';
import Item from 'components/ContactItem/ContactItem';

export default function ContactList({ title, contacts, onDeleteContact }) {
  return (
    <ContactSection>
      <ContactTitle>{title}</ContactTitle>
      <ContactWrapper>
        {contacts.map(({ id, name, number }) => (
          <Item
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactWrapper>
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
  onDeleteContact: PropTypes.func.isRequired,
};
