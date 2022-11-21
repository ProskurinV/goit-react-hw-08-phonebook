import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Flex } from '@chakra-ui/react';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name?.toLowerCase()?.includes(normFilter)
    );
  };
  const visibleContacts = filteredContacts();

  return (
    <ul>
      <Flex
        justifyContent="center"
        gap="10px"
        wrap="wrap"
        backgroundColor="#F7FAFC"
      >
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </Flex>
    </ul>
  );
}
