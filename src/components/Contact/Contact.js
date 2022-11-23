import { DeleteIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Card, Text, CardBody, Button } from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Card>
      <CardBody
        minW={100}
        h={50}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        padding="5px"
      >
        <Text>
          {name} : {number}
        </Text>
        <Button colorScheme="blue" type="button" onClick={handleDelete} w={10}>
          <DeleteIcon w={5} h={5} />
        </Button>
      </CardBody>
    </Card>
  );
};
