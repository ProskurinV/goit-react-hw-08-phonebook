import { FindWrapper, FindTitle, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <FindWrapper>
      <FindTitle>Find contacts</FindTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter search name"
        value={filter}
        onChange={onFilterChange}
      />
    </FindWrapper>
  );
}
