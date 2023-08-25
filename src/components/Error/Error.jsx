import styles from "./Error.module.css"

const Error = () => {
  return (
    <div className={styles.divContainerError}>
        <img src="../public/img/error.png" className={styles.imgError} alt="" />
    </div>
  )
}

export default Error