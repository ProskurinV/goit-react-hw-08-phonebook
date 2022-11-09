import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import contacts from '../data/contacts.json';

const contactsInitialState = {
  contactList: [...contacts],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contactList.push({ ...action.payload, id: nanoid() });
    },
    // prepare(name, number) {
    //   return {
    //     payload: {
    //       name,
    //       number,
    //       id: nanoid(),
    //     },
    //   };
    // },

    deleteContact(state, action) {
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Экспортируем генераторы экшенов и редюсер
export const { contactList, addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
