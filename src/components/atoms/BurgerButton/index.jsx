import styles from "./BurgerButton.module.scss"

const BurgerButton = (props) => {
  const {
    className = "",
    onClick,
    isActive,
  } = props;

  return (
    <button
      className={`${styles.burgerButton} ${className} ${isActive ? styles.burgerButtonActive : ""} visible-mobile`}
      type="button"
      aria-label="Open menu"
      title="Open menu"
      onClick={() => onClick()}
    >
      <span className={`${styles.burgerButton__line}`}></span>
      <span className={`${styles.burgerButton__line}`}></span>
      <span className={`${styles.burgerButton__line}`}></span>
    </button>
  )
}

export default BurgerButton