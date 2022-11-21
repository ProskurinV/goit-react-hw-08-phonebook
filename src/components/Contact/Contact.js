import { DeleteIcon } from '@chakra-ui/icons';
// import Notiflix from 'notiflix';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Card, Text, CardBody, Button } from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Card>
      <CardBody>
        <Text>
          {name} : {number}
        </Text>
        <Button colorScheme="blue" type="button" onClick={handleDelete}>
          <DeleteIcon w={5} h={5} />
        </Button>
      </CardBody>
    </Card>
  );
};
