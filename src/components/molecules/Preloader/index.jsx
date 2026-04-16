import styles from "./Preloader.module.scss"

const preloader = () => {
  return (
    <div id="preloader" className={`${styles.preloader}`}>
      <div className={`${styles.spinner}`}></div>
    </div>
  );
};

export default preloader;