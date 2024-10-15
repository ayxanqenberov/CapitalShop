import React from "react";
import "./sign.css";
import { useFormik } from "formik";
import { SignUpSchema } from "../schema/SignUpSchema";
import axios from "axios";

const Sign = () => {
  const submit = async (values) => {
    try {
      await axios.post(
        "https://670e4419073307b4ee462233.mockapi.io/user",
        values
      );
    } catch (error) {
      console.error("Error occurred while submitting data:", error);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: submit,
  });

  return (
    <div className="signUppage">
      <form onSubmit={handleSubmit} className="signForm">
        <span>Sign up</span>
        <div className="item">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name.."
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="item">
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            type="text"
            placeholder="Surname.."
            onChange={handleChange}
            value={values.surname}
          />
          {errors.surname && <p className="error">{errors.surname}</p>}
        </div>
        <div className="item">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            placeholder="Age.."
            onChange={handleChange}
            value={values.age}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email.."
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="item">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Password.."
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="item">
          <label htmlFor="passwordRepeat">Repeat Password</label>
          <input
            id="passwordRepeat"
            type="text"
            placeholder="Please repeat password.."
            onChange={handleChange}
            value={values.passwordRepeat}
          />
          {errors.passwordRepeat && (
            <p className="error">{errors.passwordRepeat}</p>
          )}
        </div>
        <button id="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Sign;
