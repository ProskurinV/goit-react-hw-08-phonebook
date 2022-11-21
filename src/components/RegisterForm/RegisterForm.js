import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { EmailIcon } from '@chakra-ui/icons';

// import { Formik } from 'formik';
import { useFormik } from 'formik';

import * as yup from 'yup';
// import { FormBook, Input, Label, Btn, Error } from './RegisterForm.styled';
// import css from './RegisterForm.module.css';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

let schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(7),
});

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
// };

export function RegisterForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit} validationSchema={schema}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                placeholder="Enter name"
                type="name"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

// export function RegisterForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(register(values));
//     resetForm();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={schema}
//       >
//         <FormBook autoComplete="off">
//           <Label>
//             Name
//             <Input
//               type="text"
//               placeholder="Enter name"
//               name="name"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             />
//             <Error name="name" component="div" />
//           </Label>
//           <Label>
//             <EmailIcon />
//             <Input type="text" placeholder="Enter email" name="email" />
//             <Error name="email" component="div" />
//           </Label>
//           <Label>
//             Password
//             <Input
//               type="password"
//               placeholder="Enter password"
//               name="password"
//             />
//             <Error name="password" component="div" />
//           </Label>

//           <Btn type="submit">Register</Btn>
//         </FormBook>
//       </Formik>
//     </>
//   );
// }

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
