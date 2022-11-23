import { Field, Formik } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';

import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';

let schema = yup.object().shape({
  name: yup.string().required('Please, enter name'),
  number: yup.string().min(7).required('Please, enter correct number'),
});

export function ContactEditor() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            const findDuplicateName = (contact, newName) => {
              return contacts.find(
                ({ name }) => name.toLowerCase() === newName
              );
            };
            const { name } = values;
            const nameToRegistr = name.toLowerCase();
            if (findDuplicateName(contacts.items, nameToRegistr)) {
              toast.error(`${name} is already in your contacts`);
              return;
            }

            dispatch(addContact(values));
            resetForm();
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                    placeholder="Enter name"
                  />
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.number && touched.number}
                >
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="number"
                    placeholder="Enter phone"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.number}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Add contact
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      <Toaster position="top-right" />
    </Flex>
  );
}
