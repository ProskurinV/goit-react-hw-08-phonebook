import { Formik } from 'formik';
import * as yup from 'yup';
import { FormBook, Input, Label, Btn, Error } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

let schema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.'),
});

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn(
        values
        // { email, password }
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
          <Btn type="submit">Log In</Btn>
        </FormBook>
      </Formik>
    </>
  );
}
