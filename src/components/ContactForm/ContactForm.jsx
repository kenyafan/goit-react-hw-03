import s from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const nameFieldId = nanoid();
const telFieldId = nanoid();

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", tel: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
      }}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={s.input}
        />

        <label htmlFor={telFieldId}>Number</label>
        <Field type="tel" name="tel" id={telFieldId} className={s.input} />
        <button type="submit" className={s.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
