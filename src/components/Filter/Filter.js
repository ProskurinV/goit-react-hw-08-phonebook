import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input } from '@chakra-ui/react';
import { Heading, Flex } from '@chakra-ui/react';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <>
      <Flex justifyContent="center">
        <Heading as="h2" size="l">
          Find contacts
        </Heading>
      </Flex>
      <Flex justifyContent="center" paddingBottom="8px" paddingTop="8px">
        <Input
          width="auto"
          type="text"
          name="filter"
          placeholder="Enter search name"
          value={filter}
          onChange={onFilterChange}
        />
      </Flex>
    </>
  );
}
