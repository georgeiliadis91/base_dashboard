import React from "react";
import { useForm } from "../../hooks/useForm";
import styles from './Login.module.css';

interface Props {}

const defaultValues ={
  name:'',
  password:''
}

export const Login = (props: Props) => {
  const { formValues, formErrors, handleChange, handleSubmit} =useForm(defaultValues);


  return (
      <div className={styles.login_page_container}>
        <div className={styles.login_form_container}>
          <span>{JSON.stringify(formErrors)}</span>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input name="name" type="email" onChange={handleChange} value={formValues.name}/> 
            <label htmlFor="password">Password</label>
            <input name="password" type="password" onChange={handleChange} value={formValues.password}/> 
            <input value="submit" type="submit"/> 
          </form>
        </div>
      </div>
      );
};
