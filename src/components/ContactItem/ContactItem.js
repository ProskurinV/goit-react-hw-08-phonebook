// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, CloseBtn } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      {contact}
      <CloseBtn type="button" onClick={handleDelete}>
        delete
      </CloseBtn>
    </Item>
  );
}

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
