import React from "react";
import { IRegisterFormfields, useForm } from "../../hooks/useForm";
import styles from './Register.module.css'
interface Props {}


const defaultValues: IRegisterFormfields = {
  name: "",
  password: "",
  passwordConfirm: "",
};

export const Register = (props: Props) => {

    const { formValues, formErrors, handleChange, handleSubmit } =
    useForm(defaultValues);


  return   <div className={styles.register_page_container} data-testid="register-page">
      <div className={styles.register_form_container}>
        <h4 className={styles.form_title}>Register Here</h4>
        <span>
          {Object.values(formErrors).map((errorVal) => {
            if (errorVal) {
              return <span className={styles.error}>{errorVal}</span>;
            }
            return null;
          })}
        </span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.register_form_input}
            name="name"
            type="email"
            onChange={handleChange}
            value={formValues.name}
          />
          <label htmlFor="password">Password</label>
          <input
            className={styles.register_form_input}
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            className={styles.register_form_input}
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
            // value={formValues.passwordConfirm} fix this 
          />
          <input
            data-testid="form-submit"
            className={styles.form_submit}
            value="Submit"
            type="submit"
          />
        </form>
      </div>
    </div>;
};
