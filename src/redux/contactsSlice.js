import { createSlice } from "@reduxjs/toolkit"

const initialState = {
            items: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ],
    }
    
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, {payload}) => {
            state.items.push(payload)
        },
        deleteContact: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload)
        },
        editContact: (state, {payload}) => {
            const contactToEdit = state.items.find(item => item.id === payload.id)
            if (contactToEdit) {
                contactToEdit.name = payload.name
                contactToEdit.number = payload.number
            }
        }
    }
})

export const {addContact, deleteContact, editContact} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items
