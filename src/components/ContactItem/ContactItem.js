import PropTypes from 'prop-types';

import { Item, CloseBtn } from './ContactItem.styled';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <Item>
      {name}:{number}
      <CloseBtn type="button" onClick={() => onDeleteContact(id)}>
        delete
      </CloseBtn>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
