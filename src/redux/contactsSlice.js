import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);
// ...extraActions.map(extraAction => extraAction.pending)

const handleFetchContactsReducer = (state, action) => {
  state.items = action.payload;
};
const handleAddContactReducer = (state, action) => {
  state.items.push(action.payload);
};
const handleDeleteContactReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyFulfielledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsReducer)
      .addCase(addContact.fulfilled, handleAddContactReducer)
      .addCase(deleteContact.fulfilled, handleDeleteContactReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anyFulfielledReducer
      )
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      ),
});

export const contactsReducer = contactsSlice.reducer;
