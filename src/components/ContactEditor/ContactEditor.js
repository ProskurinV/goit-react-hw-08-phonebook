import { useFormik } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';
import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
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
  name: yup.string().required('Please, enter name'),
  number: yup.string().min(7).required('Please, enter correct number'),
});

export function ContactEditor() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const findDuplicateName = (contact, newName) => {
        return contacts.find(({ name }) => name.toLowerCase() === newName);
      };
      const { name } = values;
      const nameToRegistr = name.toLowerCase();
      if (findDuplicateName(contacts.items, nameToRegistr)) {
        Notiflix.Notify.info(`${name} is already in your contacts`);
        return;
      }

      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit} validationSchema={schema}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
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
            <FormControl>
              <FormLabel htmlFor="number">Number</FormLabel>
              <Input
                id="number"
                name="number"
                type="tel"
                placeholder="Enter phone"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Add contact
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// // import { FormBook, Input, Label, Btn, Error } from './ContactEditor.styled';
// import Notiflix from 'notiflix';
// import { PhoneIcon } from '@chakra-ui/icons';

// // import { selectContacts } from 'redux/contacts/selectors';
// // import { useAddContactMutation } from './redux/contacts/contactsSlice';
// import { addContact } from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';

// let schema = yup.object().shape({
//   name: yup.string().required('Please, enter name'),
//   number: yup.string().min(7).required('Please, enter correct number'),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export function ContactEditor() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   // const [addContact] = useAddContactMutation();

//   const handleAddContact = (values, { resetForm }) => {
//     const findDuplicateName = (contact, newName) => {
//       return contacts.find(({ name }) => name.toLowerCase() === newName);
//     };

//     const { name } = values;
//     const nameToRegistr = name.toLowerCase();
//     if (findDuplicateName(contacts.items, nameToRegistr)) {
//       Notiflix.Notify.info(`${name} is already in your contacts`);
//       return;
//     }

//     dispatch(addContact(values));
//     resetForm();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleAddContact}
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
//             <PhoneIcon />
//             <Input
//               type="tel"
//               placeholder="Enter phone"
//               name="number"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             />
//             <Error name="number" component="div" />
//           </Label>

//           <Btn type="submit">Add contact</Btn>
//         </FormBook>
//       </Formik>
//     </>
//   );
// }

// export const ContactEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     if (name !== '' && number !== '') {
//       dispatch(addContact(name, number));
//       form.reset();
//       return;
//     }
//     alert('Contact cannot be empty. Enter some text!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label>
//         Name
//         <input name="name" className={css.input} />
//       </label>
//       <label>
//         Phone
//         <input name="number" className={css.input} />
//       </label>
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };
