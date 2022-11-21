import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
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
import { selectRegisterError } from 'redux/auth/selectors';

let schema = yup.object().shape({
  name: yup.string().min(3).max(20),
  email: yup.string().email(),
  password: yup.string().min(7),
});

export function RegisterForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectRegisterError);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            dispatch(register(values));

            if (!error) {
              toast.success(`Registration successful`);
              resetForm();
            } else {
              toast.error(`Something went wrong, please check your data`);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl
                  isRequired
                  isInvalid={!!errors.name && touched.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                    placeholder="Enter name"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.email && touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Enter email"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Log In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Toaster />
      </Box>
    </Flex>
  );
}
