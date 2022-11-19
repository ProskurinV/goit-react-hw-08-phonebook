// import { FindWrapper, FindTitle, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input } from '@chakra-ui/react';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <>
      <h2>Find contacts</h2>
      <Input
        type="text"
        name="filter"
        placeholder="Enter search name"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
}
