import { useState } from 'react';
import css from './EditContactModal.module.css';

const EditContactModal = ({ isOpen, onClose, contact, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ id: contact.id, name, number });
    onClose();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.editModal}>
        <h3 className={css.modalTitle}>Edit contact</h3>

        <form className={css.modalForm} onSubmit={handleSubmit}>
          <div>
            <label className={css.modalLabel}>Name:</label>
            <input className={css.modalInput}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
            <label className={css.modalLabel}>Number:</label>
            <input className={css.modalInput}
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} />
          </div>

          <div className={css.modalBtnWrapper}>
            <button
              type="button"
              onClick={onClose}
              className={css.modalBtnCancel}>Cancel</button>

            <button
              type="submit"
              className={css.modalBtn}>Save</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default EditContactModal;
