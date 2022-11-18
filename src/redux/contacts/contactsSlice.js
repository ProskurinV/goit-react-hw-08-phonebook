// Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define a service using a base URL and expected endpoints
// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: values => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;
// -------------
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
    filter: '',
  },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
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

export const { updateFilter } = contactsSlice.actions;
