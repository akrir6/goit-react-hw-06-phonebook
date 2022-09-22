const { createSlice } = require('@reduxjs/toolkit');

const contactsInitState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addNewContact(state, action) {
      state.items.find(c => c.name === action.payload.name)
        ? alert(`${action.payload.name} already exists in contacts list.`)
        : state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addNewContact, removeContact, setFilter } =
  contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
