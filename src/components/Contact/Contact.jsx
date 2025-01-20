import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact, editContact } from '../../redux/contactsSlice';
import { FaUser } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';

const Contact = ({ data: { id, name, number } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSave = data => {
    dispatch(editContact(data));
  };

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <FaUser className={css.contactIcons} /> {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhone className={css.contactIcons} /> {number}
        </p>
      </div>

      <div>
        <button
          className={css.contactBtnDelete}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete <FaUserTimes className={css.iconBtn} />
        </button>
        <button
          className={css.contactBtnDelete}
          onClick={() => setIsModalOpen(true)}
        >
          Edit <FaEdit className={css.iconBtn} />
        </button>
      </div>

      {isModalOpen && (
        <EditContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contact={{ id, name, number }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Contact;
