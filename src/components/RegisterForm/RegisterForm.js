import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Formik } from 'formik';
import * as yup from 'yup';
import { FormBook, Input, Label, Btn, Error } from './RegisterForm.styled';
// import css from './RegisterForm.module.css';

let schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(7),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // const findDuplicateName = (contacts, newName) => {
    //   return contacts.find(({ name }) => name.toLowerCase() === newName);
    // };
    // const { name } = values;
    // const nameToRegistr = name.toLowerCase();
    // if (findDuplicateName(contacts.items, nameToRegistr)) {
    //   Notiflix.Notify.info(`${name} is already in your contacts`);
    //   return;
    // }

    dispatch(register(values));
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

          <Btn type="submit">Register</Btn>
        </FormBook>
      </Formik>
    </>
  );
}

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
