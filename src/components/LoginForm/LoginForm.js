import { Formik } from 'formik';
import * as yup from 'yup';
import { FormBook, Input, Label, Btn, Error } from './LoginForm.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

let schema = yup.object().shape({
  email: yup.string().email().required('Please, enter email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
            <Input type="text" placeholder="Enter email" name="email" />
            <Error name="email" component="div" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              placeholder="Enter password"
              name="password"
            />
            <Error name="password" component="div" />
          </Label>

          <Btn type="submit">Log In</Btn>
        </FormBook>
      </Formik>
    </>
  );
}

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
