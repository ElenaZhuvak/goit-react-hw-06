
import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice"
// import { selectFilter } from "../../redux/filtersSlice"


const ContactList = () => {
  const contacts = useSelector(selectContacts)
  // const filter = useSelector(selectFilter)

  // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter))
  // console.log(filteredContacts)

  return (
    <ul className={css.listItem}>
        {contacts.map(contact => {
            return <li key={contact.id}>
                <Contact data={contact}/>
            </li>
        })}
    </ul>
  )
}

export default ContactList
