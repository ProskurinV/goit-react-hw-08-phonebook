import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivatRoute } from './PrivatRoute';
import { Layout } from 'components/Layout';

const Homepage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivatRoute component={ContactsPage} redirectTo="/login" />
            }
          ></Route>
        </Route>
      </Routes>
    )
  );
}

// import { MainBox } from './App.styled';
// import FormEl from 'components/Form/Form';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter';
// import Title from 'components/Title/Title';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <MainBox>
//       <Title title="Phonebook" />
//       <FormEl />
//       <Filter title="Find contacts by name" />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList title="Contacts" />
//     </MainBox>
//   );
// }
