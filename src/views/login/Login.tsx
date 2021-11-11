import React, { Fragment } from "react";
import { useForm } from "../../hooks/useForm";
import styles from "./Login.module.css";

interface Props {}

const defaultValues = {
  name: "",
  password: "",
};

export const Login = (props: Props) => {
  const { formValues, formErrors, handleChange, handleSubmit } =
    useForm(defaultValues);

  return (
    <div className={styles.login_page_container} data-testid="login-page">
      <div className={styles.login_form_container}>
        <h4 className={styles.form_title}>Login Here</h4>
        <span>
          {Object.values(formErrors).map((errorVal) => {
            if (errorVal) {
              return<Fragment>
                    <span className={styles.error}>{errorVal}</span><br />
                </Fragment>
            }
            return null;
          })}
        </span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.login_form_input}
            name="name"
            type="email"
            onChange={handleChange}
            value={formValues.name}
          />
          <label htmlFor="password">Password</label>
          <input
            className={styles.login_form_input}
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
          />
          <input
            data-testid="form-submit"
            className={styles.form_submit}
            value="Submit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};
