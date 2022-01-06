import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact/Form.module.scss";

const Form = () => {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [time, setTime] = useState(3);

  if (state.succeeded) {
    // On page load
    useEffect(() => {
      // Reduce 'time' by 1 for each second
      const countdown = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      // Clean up interval timer
      return () => {
        clearInterval(countdown);
      };
    });

    // On page load
    useEffect(() => {
      // Redirect to home after 3 seconds
      const timer = setTimeout(() => {
        Router.push("/contact");
      }, 3000);

      // Clean up timeout
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return (
      <>
        <p>Successfully submitted!</p>
        <p>Refreshing page in {time} seconds..</p>
      </>
    );
  }

  return (
    <form
      id={styles.form}
      name="contact"
      // action="/success"
      method="POST"
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div id={styles.nameContainer}>
        <label>
          Name
          <input type="text" name="name" required minLength="2" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>
      </div>
      <div id={styles.emailContainer}>
        <label>
          Email
          <input type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
      </div>
      <div id={styles.messageContainer}>
        <label>
          Message
          <textarea name="message" cols="30" rows="8" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
      </div>
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default Form;
