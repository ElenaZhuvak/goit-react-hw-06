import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = ({contacts, onDelete}) => {
  return (
    <ul className={css.listItem}>
        {contacts.map(contact => {
            return <li key={contact.id}>
                <Contact data={contact} onDelete={onDelete}/>
            </li>
        })}
    </ul>
  )
}

export default ContactList