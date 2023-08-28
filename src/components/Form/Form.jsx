/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
import { useState } from "react";
import { validateEmail, validatePassword } from "../../helpers/Validation";
import styles from "./Form.module.css";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [property]: value });
    if (property === "email") {
      validateEmail({ email: value }, errors, setErrors);
    } else if (property === "password") {
      validatePassword({ password: value }, errors, setErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Formulario enviado");
    login(userData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.divImgForm}>
        <div>
          <img
            className={styles.imgForm}
            src="../public/img/imgForm.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.divInputsForm}>
        <div className={styles.email}>
          <label htmlFor="emailInput">Email: </label>
          <input
            id="emailInput"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="tu email aqui...📧"
            className={errors.email ? styles.errorsInput : ""}
          />
          <span className={errors.email ? styles.errorsSpan : ""}>
            {errors.email}
          </span>
        </div>
        <div className={styles.password}>
          <label htmlFor="passwordInput">Password: </label>
          <input
            id="passwordInput"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="tu password aqui...🔐"
            className={errors.password ? styles.errorsInput : ""}
          />
          <span className={errors.password ? styles.errorsSpan : ""}>
            {errors.password}
          </span>
        </div>
        <div className={styles.divButtonLogin}>
          <button className={styles.buttonLoginForm} type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
