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

import Notiflix from 'notiflix';

import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { selectError } from 'redux/auth/selectors';

let schema = yup.object().shape({
  email: yup.string().email().required('Please, enter email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export function LoginForm() {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);

  //  function handleFormSubmit(values) {
  //    dispatch(logIn(values));
  // }

  const handleFormSubmit = async (values, { resetForm }) => {
    const { error } = await dispatch(logIn(values));
    if (!error) {
      resetForm();
      Notiflix.Notify.success('You are logged in');
      return;
    }
    Notiflix.Notify.failure(`Something went wrong, please check your data`);
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
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
      </Box>
    </Flex>
  );
}
