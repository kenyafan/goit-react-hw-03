import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      <Contact contacts={contacts} handleDelete={handleDelete} />
    </ul>
  );
};

export default ContactList;
