import { Formik } from 'formik';
import * as yup from 'yup';
import { FormBook, Input, Label, Btn, Error } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Please, enter name'),
  email: yup.string().email(),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register(
        values
        // const form=event.currentTarget;
        // { name, email:form.elements.email.value, password }
      )
    );
    // dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormBook autoComplete="off">
          <Label>
            Name
            <Input
              type="text"
              placeholder="Enter name"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <Error name="name" component="div" />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              title="Email must be digits and can contain spaces, dashes, parentheses"
            />
            <Error name="email" component="div" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              placeholder="Enter password"
              name="Password"
              title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <Error name="password" component="div" />
          </Label>
          <Btn type="submit">Register</Btn>
        </FormBook>
      </Formik>
    </>
  );
}
