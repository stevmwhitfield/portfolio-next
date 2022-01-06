import Router from "next/router";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact/Form.module.scss";

const Form = () => {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM);

  return (
    <form
      id={styles.form}
      name="contact"
      action="/success"
      method="POST"
      onSubmit={() => {
        submit();
        Router.push("/success");
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div id={styles.nameContainer}>
        <label>
          Name
          <input type="text" name="name" required minLength="2" />
          <ValidationError
            prefix="Name"
            field="name"
            errors={formState.errors}
          />
        </label>
      </div>
      <div id={styles.emailContainer}>
        <label>
          Email
          <input type="email" name="email" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={formState.errors}
          />
        </label>
      </div>
      <div id={styles.messageContainer}>
        <label>
          Message
          <textarea name="message" cols="30" rows="8" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={formState.errors}
          />
        </label>
      </div>
      <button type="submit" disabled={formState.submitting}>
        Send
      </button>
      <ValidationError errors={formState.errors} />
    </form>
  );
};

export default Form;
