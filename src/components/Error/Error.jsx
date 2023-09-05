// import styles from "./Error.module.css";

// const Error = () => {
//   return (
//     <>
//       <div className={styles.divContainerError}>
//         <img src="../public/img/error.png" className={styles.imgError} alt="" />
//       </div>
//     </>
//   );
// };

// export default Error;

import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";
import PATHROUTES from "../../helpers/PathRoutes";

const Error = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(PATHROUTES.HOME);
  };

  return (
    <>
      <div className={styles.divContainerError}>
        <img src="../public/img/error.png" className={styles.imgError} alt="" />
        <button onClick={handleRedirect}>Ir a la página de inicio</button>
      </div>
    </>
  );
};

export default Error;
