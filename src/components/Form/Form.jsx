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
      if (value === "") {
        setErrors({ ...errors, email: "" });
      } else {
        validateEmail({ email: value }, errors, setErrors);
      }
    } else if (property === "password") {
      if (value === "") {
        setErrors({ ...errors, password: "" });
      } else {
        validatePassword({ password: value }, errors, setErrors);
      }
    }
  };
  
  // const handleChange = (e) => {
  //   const property = e.target.name;
  //   const value = e.target.value;

  //   setUserData({ ...userData, [property]: value });
  //   if (property === "email") {
  //     validateEmail({ email: value }, errors, setErrors);
  //   } else if (property === "password") {
  //     validatePassword({ password: value }, errors, setErrors);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.divImgForm}>
        <img
          className={styles.imgForm}
          src="../public/img/imgForm.png"
          alt=""
        />
      </div>
      <div className={styles.containerInputsForm}>
        <div className={styles.divInputsForm}>
          <div className={styles.email}>
            <label htmlFor="emailInput">Email: </label>
            <input
              id="emailInput"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="📧 email"
              // className={errors.email ? styles.errorsInput : styles.successInput}
              className={errors.email ? styles.errorsInput : (userData.email && !errors.email) ? styles.successInput : ""}
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
              placeholder="🔐 password"
              // className={errors.password ? styles.errorsInput : ""}
              className={errors.password ? styles.errorsInput : (userData.password && !errors.password) ? styles.successInput : ""}

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
      </div>
    </form>
  );
};

export default Form;
