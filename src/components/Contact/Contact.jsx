import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <div>
            <p className={s.name}>
              <FaUser className={s.icon} />
              {contact.name}
            </p>
            <p className={s.number}>
              <BsFillTelephoneFill className={s.icon} />
              {contact.number}
            </p>
          </div>
          <button
            className={s.button}
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Contact;
