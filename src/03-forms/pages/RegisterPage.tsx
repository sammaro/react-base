import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

interface Form {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const RegisterPage = () => {

  const { name, email, password, passwordConfirmation,
    formData, handleChange, isValidEmail, resetFormData } = useForm<Form>({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Repeat Password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
        <button type="button" onClick={resetFormData}>Reset</button>

      </form>
    </div>
  )
}