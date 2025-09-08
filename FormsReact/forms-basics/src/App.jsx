import React from 'react';
import './App.css';

const App = () => {
  
  const signUp = (formData) => {
    const name = formData.get('name');
    const password = formData.get('password');
    const email = formData.get('email');
    console.log(name, password, email);
  }

  return (
    <section className="page">
      <form action={signUp} className="form">
        <h1 className="title">Sign Up Form</h1>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="input"
          name="name"
          placeholder="John P"
          required
        />
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          id="email"
          className="input"
          type="email"
          name="email"
          placeholder="john@mail.com"
          required
        />

        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          required
        />

        <button className="btn" type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default App;
