import { useState } from "react";

interface IFormfields {
  name?: string;
  password?: string;
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
  if (!formValues.name) {
    errors.name = "Name is required";
  }
  if (!formValues.password) {
    errors.password = "Password is required";
  }
  return errors;
}
