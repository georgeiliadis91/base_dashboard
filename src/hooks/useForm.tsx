import { useState } from "react";
import { capitaliseFirstLetter } from "../helpers/stringFormatting";



export interface IFormfields {
  name?: string;
  password?: string;
  passwordConfirm?: string;
}


//custom hook with form values
export function useForm(initialValues: IFormfields) {
  const [formValues, setFormValues] = useState<IFormfields>(initialValues);
  const [formErrors, setFormErrors] = useState<IFormfields>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("the event", e);
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
  };

  return {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
  };
}

//validates form function fields
function validate(formValues: IFormfields) {

  const errors: IFormfields = {};
  
  Object.keys(formValues).forEach((key)=> {
    if (!formValues[key as keyof IFormfields]) {
      errors[key as keyof IFormfields] = `${capitaliseFirstLetter(key)} is required`
    };
  })

  return errors;
}
