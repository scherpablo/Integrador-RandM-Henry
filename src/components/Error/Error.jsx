import styles from "./Error.module.css";

const Error = () => {
  return (
    <>
      <div className={styles.divContainerError}>
        {/* <img src="../public/img/error.png" className={styles.imgError} alt="" /> */}
        <div className={styles.divError}>
          <h3 className={styles.h3Error}>PAGE NOT FOUND</h3>
          <h2 className={styles.h2Error}>4</h2>
          <h2 className={styles.four}>4</h2>
          <div className={styles.morty}>
            <div className={styles.hair}></div>
            <div className={styles.ears}></div>
            <div className={styles.face}></div>
            <div className={styles.eyes}></div>
            <div className={styles.nose}></div>
            <div className={styles.mouth}></div>
            <div className={styles.lines}></div>
          </div>
          <h1 className={styles.h1Error}>ERROR</h1>
        </div>
      </div>
    </>
  );
};

export default Error;
